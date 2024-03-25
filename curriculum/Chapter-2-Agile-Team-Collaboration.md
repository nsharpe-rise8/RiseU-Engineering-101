# Chapter 2: Agile and Team Collaboration

## Objectives

By completing this chapter, you will:

- Understand the foundational Agile Methodologies and the specific Rise8 Agile Principles.
- Explore the dynamics of Agile and Team Collaboration.
- Recognize the responsibilities within Agile teams, including partner engagement and portfolio leadership.
- Appreciate the value of a Balanced Team in integrating Design, Product, and Engineering efforts.
- Master the planning processes and point systems that drive workload management and prioritization.
- Learn the nuances of sprints, from pre-planning to demonstrations, and the importance of collecting user feedback.

## Introduction to Agile

Agile is a modern approach to software development that enables teams to deliver value to their customers effectively and efficiently. This methodology is underpinned by a set of principles that prioritize flexibility, collaboration, and the continuous delivery of functional software. At its core, Agile is not a prescriptive framework with rigid rules but rather a philosophy that guides decision-making processes. It encourages teams to view the development cycle as a series of iterative releases, allowing for frequent reassessment of priorities and incorporation of feedback to better meet customer needs.

In this chapter, we'll explore how Agile principles apply in the context of team collaboration and project management. We'll dissect how the principles and practices of Agile can not only improve the quality of software but also enhance the productivity and engagement of Agile teams. For further reading, we have linked the [Agile Manifesto](https://agilemanifesto.org/principles.html) as well

### Rise8 Agile Principles

TODO: Elaborate on the Rise8 Agile Principles that tailor the Agile methodology to our specific organizational context and goals.

## Pair Programming

Pair programming is a development technique where two developers author software using the same computer. In a remote environment, one user can share the screen with another via collaboration software such as Zoom or Live Share. There are two roles in pair programming:

- Driver: The person who is writing the code.
- Navigator: The person who helps the driver navigate the code development process. They can write code in the form of suggestions or corrections.

Here are a few helpful hints when pairing:

- Pairing can be tiring, take breaks often.
- Rotate pairs regularly. Each person brings something unique to the table which will improve the codebase as a whole. Swapping pairs also drives both knowledge sharing and alignment across the team.
- Be open to new ideas and constructive criticism.
- Sometimes pairing might not be the best approach. Feel free to solo when it makes sense. But remember, committed code requires a peer review.

## Roles and Responsibilities

### Balanced Teams

Within the agile framework, the concept of balanced teams has emerged as a cornerstone for providing value to the end users. A balanced team, typically composed of engineers, designers, and product managers, embodies a holistic approach to product development, where collaboration across disciplines is not just encouraged — it's a fundamental principle. This section explores how balanced teams foster collaboration between different disciplines to create better product outcomes and, ultimately, deliver exceptional value to users.

#### Key Benefits

- Cross-disciplinary Insights and Innovation
- Enhanced Communication and Efficiency
- Continuous Delivery of Value

## Product Lifecycle

A key role of a balanced team is effectively managing the life cycle of software products. While there are different definitions of the pieces that compose this life cycle, we will cover these four sections: inception, iteration, release, and maintenance.

### Inception:

During the inception phase, the product owner determines the scope of the project. With collaboration from stakeholders, they outline essential requirements and features, focusing on a lean approach that emphasizes flexibility for future adjustments. This stage includes estimating the project's time and cost to determine viability.

As the concept gains clarity, the inception phase takes shape by assembling a dedicated development team, ensuring they have the necessary tools and resources. Design efforts commence with creating user interface mockups and establishing the project's architecture, guided by ongoing stakeholder feedback to refine product functionality. This foundational phase sets the direction for the project, balancing detailed planning with the agile flexibility to adapt as the project evolves.

### Iteration:

The iteration phase is where the vision starts to become a reality. This phase is at the heart of Agile development, marked by cycles of building, testing, and refining the product based on user feedback and requirements. Development teams, in close collaboration with UX designers, translate designs into functional code, aiming to establish the product's core functionality during the initial sprints. Subsequent iterations focus on enhancing features, fixing issues, and responding to user needs, embodying the Agile commitment to delivering value and quality incrementally and efficiently.

### Realease:

As the product approaches its launch, the focus shifts to validation and preparation for release. The quality assurance (QA) team plays a critical role during this phase, conducting extensive testing to verify the software's functionality and reliability. In the spirit of Agile, any bugs or defects identified are quickly remediated by developers, ensuring the product meets the highest standards of quality.

Once testing is complete and all stakeholders are confident in the product's quality and usability, the final version is released into production, marking a significant milestone in the Agile development process.

### Maintinence:

With the software fully deployed and in the hands of customers, the project transitions into the maintenance phase. This critical stage focuses on ensuring the application continues to perform optimally and meets the evolving needs of its users. The development team remains engaged, providing essential support to address any issues that arise and quickly fixing new bugs to maintain the integrity and reliability of the product.

The maintenance phase embodies the Agile principle of continuous improvement, as feedback gathered during this period can lead to new iterations, introducing enhancements, upgrades, and new features to keep the product relevant and aligned with customer expectations.

## Essentials of Agile Methodologies and Practices

Among the various methodologies and practices under the Agile umbrella, Scrum, Kanban, User Stories, and Epics stand out for their distinct roles in facilitating effective project management. This section delves into each of these essentials, highlighting how they contribute to the Agile process.

### Scrum:

[Scrum](https://scrumguides.org/scrum-guide.html) is an Agile framework designed to help teams deliver value incrementally in a collaborative way. This is done by breaking a scrum into "scrum events". The Sprint is the container of these scrum events, and is where ideas are converted to value in prod. All the work necessary to achieve the product goal, including Sprint planning, daily scrums, and Sprint retrospective, happen within Sprints.

A Sprint is a timeboxed event, typically a month or less depending on the team, where a scrum team works to complete a set amount of work. The amount of work to be done is collaboritively decided on between members of a balanced team, but it is important the work done leads to incremental value towards the product goal. The team defines concrete acceptance criteria for the work to be implented, and by satisfying this acceptance criteria the work is considered to be "done".

A Sprint is initiated by a Sprint planning. Sprint planning lays out the work to be done within a Sprint, and the goal of these planning sessions are to answer three questions:

- Why is this Sprint valuable?
- What can be Done this Sprint?
- How will the chosen work get done?

Scrum responsibilities can vary or even be shared among roles within a balanced team, but as a developer you are primarily accountable for: creating a plan for the Sprint and maintaining the Sprint Backlog, instilling quality by in iterations adhering to acceptance criteria, adapting planss toward the sprint goal, and holding other devlopers accountable.

This backlog of work is continually reviewed and prioritzed by devs within the "daily scrum". Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work.
Daily scrums improve communications, promote quick decision-making, and consequently eliminate the need for other meetings.

After the completion of each Sprint, the scrum team holds a Sprint retrospective to assess the work done. The team discusses what went well during the Sprint, problems encountered, and how these problems were (or can be) solved. The outcome of a retrospective are action items to improve the effectiveness of the Sprint, which can be incoroprated as soon as the next Sprint cycle. The purpose of these meetings are to increase the efficiency and quality of the Sprint cycle, reinforcing Agile principles like iterative and continuous improvement.

It is important not to conflate the topics of Agile and scrum. Agile set of guiding principles aimed at efficiently delviering value to the end user, and scrum is a framework to apply these principles and ship software to prod. While scrum is an important framework that provides value to balanced teams, it is important to ensure your team is operating in a manner that can be considered "Agile".

## Types of Work

Agile development categorizes work into distinct types, each serving a unique role in delivering user value efficiently. Understanding these categories helps teams prioritize tasks, manage workloads, and maintain a user-focused approach throughout the product lifecycle.

### Discovery and Framing

This initial phase involves researching and defining what to build next, focusing on understanding user needs, market trends, and potential impacts on the product. Effective discovery and framing ensure that the team invests in work that maximizes user and business value.

### Feature Development

Features are new capabilities or enhancements added to a product to meet user needs or improve user experience. Focusing on features allows teams to directly address user requests or market demands, ensuring the product evolves in a way that adds real value.

### Bug Fixes

Addressing bugs is crucial for maintaining the quality and reliability of a product. Quick responses to bug reports reflect a commitment to user satisfaction and product stability, key aspects of maintaining trust and value in users' eyes.

### Tech Debt

Tech debt encompasses code or design elements that, while functional, are inefficient or potentially problematic. Prioritizing tech debt reduction can prevent future bugs, improve performance, and facilitate easier feature development, indirectly enhancing user value.

### Spikes and Mob Learning

Spikes are exploratory tasks aimed at answering specific questions or investigating potential solutions. Mob learning can be applied to spikes, where the team collaborates to solve complex problems or learn new technologies, ultimately speeding up development and enhancing product quality.

## Delivery and Feedback

TODO: Cover project-level deadlines and the importance of realistic estimations to ensure timely delivery.

## Sprint Execution

- Outline the typical sprint cycle, including task estimation, story points, and workloads, while highlighting the subjective nature of points.
- Understand the role of sprint reviews and demonstrations in gathering critical user feedback for continuous product improvement.

### Pre-Sprint Planning

Learn how to break down large tasks into smaller ones, assign points, and establish a shared understanding before the sprint begins.

## Outro

TODO: Write an outro summarizing the content above.
