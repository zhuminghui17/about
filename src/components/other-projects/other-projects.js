import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Duke Person: iOS Directory Database App",
    "url": "https://github.com/zhuminghui17/ios-duke-directory/",
    "description": "Engineered an iOS directory app in Swift, with a multi-view interface for efficient directory management, integrated robust HTTP/REST services for efficient handling of extensive JSON data and multiple CRUD operations",
    // "I developed a score prediction app for the IPL as a hobby project during the 2018 season. This app is available on both iOS and Android platforms. It allows users to make score predictions for IPL matches, adding an exciting and interactive element to the cricket-watching experience. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "Swift"},
      {"thing": "SWiftUI"},
      {"thing": "UIKit"},
      // {"thing": "Android Native"},
      // {"thing": "MongoDB"},
      // {"thing": "Redis"},
      // {"thing": "Docker"},
      // {"thing": "Digital Ocean"},
      // {"thing": "Swift"},
      // {"thing": "Kotlin"},
    ]
  },
  {
    "name": "Graph Algorithms: Shortest Path",
    "url": "https://github.com/zhuminghui17/path-planning-cpp",
    "description": "Implemented Dijkstra’s and A* algorithms and obstacle detection algorithms in C++ to find the shortest path, utilizing data structures such as Priority Queue and HashMap in the C++ STL for optimized graph traversal.",
    // "I've developed an elegant web application that displays COVID-19 statistics. The website dynamically retrieves data from reputable sources such as John Hopkins University and government websites to ensure accuracy. What sets it apart is the inclusion of a <a class='underline-link' href='https://graphql.org'>GraphQL</a> endpoint, providing a public API for seamless data consumption by anyone interested. Explore the API Documentation for further details. This comprehensive tool not only offers insightful statistics but also demonstrates a commitment to transparency and accessibility in sharing crucial information about the pandemic. <br> <a class='small' href='https://github.com/COVID19-SARS-CoV-2/web-covid-api'>👨🏻‍💻API Documentation👨🏻‍💻</a>",
    "used": [
      {"thing": "C++"},
      {"thing": "Dijkstra’s"},
      {"thing": "A*"},
      // {"thing": "GraphQL"},
      // {"thing": "Redis"},
      // {"thing": "Digital Ocean"},
      // {"thing": "API"},
      // {"thing": "Open-Source"},
      // {"thing": "React"},
    ]
  },
  {
    "name": "Kaggle: IBM Employee Attrition Classification",
    "url": "https://github.com/zhuminghui17/IBM-Employee-Attrition-Classification",
    "description": "* Performed exploratory data analysis (EDA) and feature engineering to identify and handle imbalanced data issues,\n* Applied multiple balanced ML algorithms (e.g., Balanced Random Forest) to predict employee attrition rate, ensembled with Voting Classifier,\n* Produced a robust F1 score of 75%, ranking top 25% in Kaggle Competition",
    "used": [
        {"thing": "Python"},
        {"thing": "Pandas"},
        {"thing": "NumPy"},
        {"thing": "Scikit-learn"},
        {"thing": "Matplotlib"},
        {"thing": "Seaborn"}
    ]
},

  // {
  //   "name": "CrossPlatform AES",
  //   "url": "https://github.com/skavinvarnan/Cross-Platform-AES",
  //   "description": "I've developed an open-source library for AES-256 encryption and decryption of strings, designed to seamlessly integrate across Android, iOS, and Javascript platforms. This versatile library enhances data security, offering a robust solution for safeguarding sensitive information. Whether you're working on Android, iOS, or web applications, this library provides a reliable and consistent encryption and decryption mechanism for strings, ensuring data confidentiality and integrity in your projects. <br> <a class='small' href='https://github.com/skavinvarnan/Cross-Platform-AES'>🏆 100+ Starts on Github 🏆</a>",
  //   "used": [
  //     {"thing": "Kotlin"},
  //     {"thing": "Swift"},
  //     {"thing": "JavaScript"},
  //   ]
  // },

]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
