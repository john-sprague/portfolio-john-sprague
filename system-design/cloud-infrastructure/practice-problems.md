# Foundational Subjective Question 1

1. Explain the difference between a virtual machine and a container. How are they run, and how do they interact with the host system?

**Container** 
 - A **Container** is a lightweight, standalone executable package that includes everything needed to run an application (code, libraries, dependencies) but **shares the host OS kernel** instead of running its own.

**Virtual Machine** 
 - Is an emulation of a physical computer. It runs on a **hypervisor**, which allows multiple VMs to share the same physical hardware. Each VM has its own **operating system (OS), kernel, and resources (CPU, memory, storage, networking)**.

2. Name and justify one potential advantage of using a virtual machine over a container.
    
- There's more security in a virtual machine because each on runs it's own isolated operating system. 

3. Name and justify one potential advantage of using a container over a virtual machine.
    
- It's lightweight because it uses the host operating system so there's less overhead. It's also very quick to start up compared to a VM. 

4. Imagine we want to create and deploy a scalable cloud application with high availability, would you choose to use containers or VMs? Justify.

- I'd chose containers because they are easier to scale, fast start ups, take up significantly less space, and lightweight because it uses the host operation system so there's less overhead.

---

# Foundational Subjective Question 2

You’re trying to pitch a new initiative at work to migrate an existing application off of on-premise servers and onto a cloud platform.

1. Name (2) benefits of moving to a cloud platform. Explain.
    
- Increase productivity, by moving to a cloud platform, the underlying infrastructure maintenance is managed by the cloud provider. Cloud computing provides **virtual machines (VMs) and containers** to run applications. Instead of buying physical servers, you can rent computing power on-demand.  
- In addition, cloud platforms allow you to scale resources up or down based on demand. 
- Cloud servers usually have multiple locations and are less fragile to outages in a particular locale

2. Name (2) costs/downsides of migrating to a cloud platform. Explain.
   
- Ongoing costs using a pay-as-you-go model, which means of the systems are not optimized, we could be paying extra. 
- Vender lock in and migration strategies. Migration can become complex, so once we move to a vender, we are locked in for the time being. 
- In the case of using interdependent cloud services, and outage in one service or by our provider also brings your application down. 

3. Describe an app that would be a good candidate for migrating to the cloud. Justify.

- An e-commerce application would be a good candidate because there are traffic spikes during sales event's such as black Friday and venders offer autoscaling features. It will be much simpler to scale horizontally to handle millions of users. 

---

#  Foundational Subjective Question 3

One of the considerations to developing on the cloud is application latency

1. Describe (2) ways in which cloud applications can reduce application latency over.

- Multiple containers can be deployed on the same machine. 
- Integration with CDNs, and can deploy code on servers "closer to the edge" where users are. 
- Multi-region support, geographically distributed deployments,  users can ping servers closest to them. 
- Autoscaling, then a server hit's a predefined limit, resources can increase to handle the incoming load/traffic. 

2. Describe (2) ways in which deploying on the cloud can introduce additional latency to your system. For each reason, also include one possible way to help mitigate.

**Inter-Service Communication Across Regions**

- If components are **distributed across regions**, cross-origin calls can add milliseconds of latency per request.   
    - If we are using multiple venders, that's will be additional network latency by communicating between each environment. 
- Mitigation: Co-locate interdependent services in the same region. 

**Cold Startups**
- Adds latency as the instance spins up 

**Shared Resources**
- Can have "noisy neighbors" that will congest shared networks, increasing latency. 

- **Mitigation:** User premium-tier services with dedicated network bandwidth. 

---

# Foundational Subjective Question 4

1. Briefly describe what Infrastructure as Code (IaC) is.
- It's a service or tool that allows use to treat Infrastructure like application programming. This allows teams to check in code on demand, get reviews from multiple team members, and deploy "template" infrastructure. 
- Gives us version control, i.e. if we deploy new code and it breaks the system, we can quickly roll back to the previous known working code.   


2. Name at least one IaC tool, and briefly describe what it does.

- Terraform: Uses drivers to target multiple cloud providers; requires rewrite if deploying to new provider

3. Name at least (2) advantages to use Infrastructure as Code tools over doing so manually. Justify.
- Code reviews reducing bugs 
- Version Control to roll back changes if necessary. 
- Infrastructure becomes well documented. 
- Can propagate changes or new deployments across the system faster


4. Name at least (1) potential drawback to introducing Infrastructure as Code tools to your project. Justify.

-  Can require you to learn a new language and paradigms. Can become unwieldy for complex infrastructure. 
- Bugs in the underlying packages can spread to all of your machines. 
  
