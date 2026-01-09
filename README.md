# ARTS – Audit Recommendation Tracking System

## Introduction
The Internal Audit and Integrity Department (IAID) of the Rwanda Revenue Authority (RRA) plays a key role in ensuring the implementation of audit recommendations. These recommendations originate from:

- Internal audits
- External audits (e.g. Office of the Auditor General – OAG, external consultants)
- Quality Management System (QMS) internal and external audits

The Audit Recommendation Tracking System (ARTS) is a web-based system intended to automate and streamline the follow-up process on audit recommendations, from creation through implementation and validation.

## Purpose of the System
ARTS aims to:

- Automate submission of evidence for implementation of audit recommendations
- Automate tracking and reporting of recommendation implementation
- Provide real-time visibility on the status of audit recommendations
- Ensure timely notifications and follow-up
- Generate implementation status reports efficiently
- Improve accountability and compliance with audit requirements

## Scope and Supported Departments/Divisions
ARTS will support recommendations originating from and/or assigned to multiple RRA entities, including but not limited to:

- Commissioner General Office (CG Office)
- Domestic Taxes Department (DTD)
- Customs Services Department (CSD)
- Finance Department (FIND)
- Information Technology & Digital Transformation Department (ITDTD)
- Legal Services and Board Affairs Department (LSBAD)
- Strategy and Risk Analysis Department (SRAD)
- Internal Audit and Integrity Department (IAID)
- Administration and Logistics Division (ALD)
- Human Resource (HR)
- Strategic Intelligence and Investigation Division (SIID)
- Taxpayer Service and Communication Division (TPS)
- Taxpayer Audit Division (TAD)
- Provincial and Decentralized Revenue Division (PDRD)
- Debt Management Division (DMD)
- Registration, Filing and Payment Division (RFPD)
- Tax Control and Operational Support Division (TCOSD)
- Customs Operations Divisions (COD)
- Customs Operations Support Division (COSD)
- Single Project Implementation Unit (SPIU)
- Compliance Risk Analysis and Data Analytics Division (CRADAD)
- Planning, Research and Statistics Division (PRSD)
- Revenue Accounting Division (RAD)

## High-Level Features

### Core Functional Areas
- **Audit Recommendation Management**
  - Capture audit findings, recommendations, corrective actions, implementation timelines/deadlines
  - Assign responsible departments/divisions/units and specific staff
  - Track implementation status (fully implemented, partially implemented, not implemented, beyond RRA management control, not applicable)

- **Workflows and Roles**
  - Internal auditors and QMS auditors create and manage recommendations
  - Departmental focal persons coordinate implementation and upload evidence
  - Departmental staff implement actions and submit evidence to focal persons
  - IAID/QMS auditors validate implementation and can return items for further work
  - Director/Team Leader QMS for Internal Audit validates final status

- **Dashboards and Reporting**
  - Department/division/unit-level statistics on recommendation volumes and statuses
  - Color-coded status indicators (Green, Yellow, Red, Purple, Blue)
  - Exportable reports (e.g. Excel/PDF) and overdue tracking

- **Notifications**
  - Email and in-system notifications for new recommendations, submissions, validations, and updates
  - Notifications to auditors, QMS Team Leader, Director, and relevant management roles

- **Access Control & User Management**
  - Role-based access (auditors, departmental focal persons, departmental staff, administrators, management)
  - Audit trail for changes, including status updates and administrative actions

## Initial Technical Notes

The concrete technology stack (backend, frontend, database, deployment model) will be defined in subsequent steps. This repository currently contains only the initial documentation and git history to bootstrap the ARTS project.

Future steps will include:

- Selecting the technology stack (e.g. .NET/Java/Node/Python, relational database, frontend framework)
- Designing the data model (e.g. audit findings, recommendations, departments, users, roles, workflow states)
- Implementing authentication and role-based authorization
- Implementing core workflows (creation, assignment, evidence upload, validation, reporting)
- Setting up CI/CD, testing, and backup/DR mechanisms in line with RRA policies.
