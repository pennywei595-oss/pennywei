**How to read this.** Both projects are self-initiated, with no launch data. Observed public evidence or my own audit · Assumed working assumption, no access · Proposed my design decision · Unvalidated needs research, testing or data.

[*P*Penny Wei· Product Designer, B2B SaaS](#home)

- [Work](#home)
- [CityFitness](#cityfitness)
- [Te Papa](#te-papa)
- [Skills](#skills)
- [Contact](#contact)

Open to B2B SaaS Product Designer roles

# Simple actions, with *complicated rules* behind them.

I'm Penny, a Product Designer in Wellington. I'm interested in products where one tap depends on rules the user never sees: who is allowed to do what, which system decides, and who deals with it when that goes wrong. Both case studies are self-initiated concepts. I've labelled what I observed, what I assumed and what I'd still need to validate.

[Read case studies →](#cityfitness)[Skills & tools](#skills)

Focus

Permissions, workflows, ops data

Based in

Wellington, New Zealand

Projects

2 self-initiated concepts

Contact

pennywei595@gmail.com

## Selected work

Two self-initiated concepts, not client work. Stakeholder needs and constraints are modelled, not interviewed.

[9:41 ![Class schedule with access states](img/cf-schedule.jpg) 9:41 ![Access check on class detail](img/cf-check.jpg) 9:41 ![Tier comparison](img/cf-compare.jpg) CityFitness Case 01 · 2026 When booking and physical access disagree Self-initiated conceptEntitlementsAccess controlMulti-site operationsMember + staff workflows A booking concept for a 12-club gym operator, built around one entitlement model that both the app and the studio gates would read. 13 screens · 4 flows6 roles modelled Read case study →](#cityfitness) [9:41 ![Te Papa home screen with live floor occupancy and route](img/s03.webp) 9:41 ![Staff alert screen](img/s11.webp) 9:41 ![Exhibit crowd forecast](img/s06.webp) Te Papa Families Case 02 Turning visitor-flow data into a family navigation concept Self-initiated conceptOperational dataMulti-role workflowPrivacyService design A family navigation app paired with a staff alert workflow and a role model that keeps children's data on the parent's phone. 13 screens6 roles modelled Read case study →](#te-papa)

## How I work

How I approach a project, in this order.

1**Find the failure**

Write down one concrete moment where the product lets someone down, and which system caused it.

2**Model the roles and rules**

Who can do what, and where each rule lives, before any screens.

3**Prototype and critique**

Figma prototypes checked against the model, with a note on why each rejected version lost.

4**Separate proof from assumption**

Label what is observed, assumed or proposed, and list what I'd test next.

**Case 01**CityFitnessSelf-initiated concept · 2026

# The app should never promise what the *door* won't honour.

CityFitness runs 12 clubs on two membership tiers. Using its public membership information and member app, I modelled one possible failure point: what happens if booking eligibility and physical access are governed by separate systems? This concept redesigns booking around one shared entitlement model, checked before a member commits.

My role

Sole designer, end to end

Project type

Self-initiated concept, not client work

Surfaces

Member app, proposed entitlement model, club config

Evidence

Public info and my own app walkthrough. No CityFitness staff or data.

What your card opens

9:41

![Your Black Card, listing included gates and studios that need Pro](img/cf-entitle.jpg)

Access check

9:41

![Class detail with access check: your Black Card won't open the Hot studio](img/cf-check.jpg)

Tier compare

9:41

![Black Card versus Pro comparison by gate and weekly price](img/cf-compare.jpg)

Entitlements → Access check → Tier compareConcept screens

Scope**13**screens across 4 flows

Scope**6**roles modelled, from member to club manager

Design constraint**1**entitlement source read by app and gates

Design target**0**bookings for a class the member's card can't open. Not measured.

1. [*01*Context](#cf-context)
2. [*02*The failure](#cf-failure)
3. [*03*Evidence](#cf-evidence)
4. [*04*System model](#cf-model)
5. [*05*Design decisions](#cf-design)
6. [*06*Trade-offs](#cf-tradeoffs)
7. [*07*Tests & metrics](#cf-next)
8. [*08*Reflection](#cf-reflection)

01

## Context

A booking product for a multi-site gym operator. Members use it, the operator pays for it, and club staff deal with its mistakes.

BuyerOperator's membership & ops leadership · hypothetical

Primary usersBlack Card and Pro members

Internal usersFront desk, club managers, CS agents, sales

Adjacent systemStudio gate access control

Observed **Black Card** covers the gym floor at all clubs, 24/7 entry and Studio 1–2 classes. The **Pro add-on** adds the hot studio, the reformer room and Studio 3. Source: public membership information.

**Goal I set.** A member should know whether their card opens a class before they book it, without adding steps for members who are already eligible.

Self-initiated concept. Not commissioned by, affiliated with or endorsed by CityFitness.

02

## The failure

A booking can succeed and the door can still refuse the member. Each system works on its own; the gap is between them.

Failure scenario · modelled, not observed

Monday 6:45pm**Books Hot Power Yoga**

A Black Card member taps Book. The booking succeeds.

7:20pm**Arrives at the club**

Taps the same card at the hot studio door.

Gate**Door stays shut**

The gate checks the tier and refuses the card.

Front desk**Override or refuse**

Staff choose between opening the door manually or turning the member away.

Later**Support ticket**

The member asks why the app let them book. Nothing in the app explains it.

This only happens if booking and the gate each hold their own copy of the tier rules. I don't know that this is how CityFitness works today. I used it as the scenario the design has to make impossible.

The same rule affects four parts of the business Assumed

Customer Success

### Refused-entry tickets

Complaints and credit requests, with no record in the app of why entry failed.

Club operations

### Manual overrides

Desk staff open doors by hand, and ineligible bookings take spots in capacity-limited classes.

Sales & membership

### Upgrade discovery

The first time a member learns about the tier gap is a refused card.

Engineering

### Rule duplication

Two copies of the tier rules can drift apart when a class or studio changes.

Constraints I assumed

Gate hardware stays as it isIt already reads a membership tier

Premium classes are capacity-limitedIneligible bookings cost real spots

No extra steps for eligible membersPro books in one tap

One release scopeClasses and studio gates only

03

## Evidence & uncertainty

This is a self-initiated concept. No CityFitness staff or internal product, booking or access-control data were available, so I separated what I could observe from the system model I proposed.

**3** observed**3** assumed**3** proposed**6** unvalidated15 statements

ObservedPublic evidence or my own audit

**Public product information.** I reviewed the publicly available membership and timetable information to understand the visible relationship between membership tiers, classes and studio access.

**Current app flow.** I walked through the publicly available booking and class-detail experience and used the visible states as inputs to the redesign.

**Membership and class structure.** The public information provided the basis for modelling membership tiers, class types and studio access.

AssumedWorking assumptions, because I had no access

**System architecture.** I modelled the booking product and physical studio access control as separate enforcement points. I assumed that membership eligibility could therefore become inconsistent if the same rule were maintained independently.

**Operational roles.** I designed for Black Card members, Pro members, front-desk staff, club operations, club managers, Sales / Customer Success and Engineering. Their needs and permissions are assumed scopes, not stakeholder-validated requirements.

**Technical constraints.** I assumed that existing gate hardware would remain in place, that it could read a membership-tier attribute, and that the release would be limited to classes and studio access.

ProposedMy design decisions

**One entitlement model.** Membership eligibility becomes a shared product rule that can be checked before a member commits to a booking.

**A view → book → attend model.** The prototype makes these three states explicit, rather than treating booking as proof of physical access.

**Access states in the schedule.** The interface distinguishes visible, bookable and unavailable classes before the member reaches the club.

UnvalidatedHypotheses that need research, testing or data

These remain hypotheses rather than established facts:

- that a member can currently book a class their physical card cannot open;
- that tier rules are actually maintained independently by the booking product and gate system;
- that rule mismatches occur when a class changes studio;
- that refused access creates a significant volume of support contacts or front-desk work;
- that ineligible bookings occupy meaningful capacity in premium classes;
- that members would use an in-product upgrade path rather than simply leave the booking flow.

The prototype therefore tests a **system failure model**. It does not claim to document CityFitness's internal architecture.

Methods

Walkthrough of the member appBooking and class detail

Public membership and timetable infoTiers, studios, class types

Business-rule mappingClass type × tier × studio × gate

04

## System model

I treated access as a data problem first: one tier attribute per class, and three states that all read it.

Current · assumed

Tier rules→Booking service→Book ✓

Tier rules (copy)→Gate controller→Attend ✕

Two copies of the rules. Each can be right on its own and still disagree.

Proposed

Membership tier→Class: required tier

View→Book→Attend→Gate

One attribute decides all three states, so a bookable class the gate won't open can't exist.

Permission matrix · try it

### What can this card do?

View

Book

Attend

Class: Hot Power Yoga · hot studio. Proposed behaviour.

Stakeholder model · assumptions, not interviews

| Role | Likely need | Permission scope |
| --- | --- | --- |
| Black Card member | Know what they can book before committing | Gym floor, Studios 1–2 |
| Pro member | Book premium classes with no extra steps | All studios |
| Front-desk staff | Explain a refusal in one sentence | View entitlements |
| Club manager | Protect premium class capacity | Class & studio config |
| CS agent | Trace why entry failed | Booking & gate history |
| Sales / membership | A visible upgrade path | Tier pricing & offers |

Modelling choices

a.

### Eligibility belongs to the class

Each class carries a required tier, so the same check works in the schedule, on detail and at the gate.

b.

### View, book and attend are separate states

Splitting them shows exactly where the scenario in section 02 leaks.

c.

### Members meet the entitlement at the door

So the UI names the studio and the card, rather than the membership plan.

d.

### A full class and a locked class look different

Capacity and permission are different reasons, and the member needs to know which one applies.

05

## Design decisions

Three decisions carry the design. The screens follow from them.

1

### Keep locked classes visible, with eligibility on the row

I tried hiding them (V1) and blocking at checkout (V2) first. Hiding removed the only place a Black Card member sees Pro classes. Blocking at checkout still surprised the member, just one step later.

2

### Check again on class detail, and name the studio and card

“Your Black Card won't open the hot studio” instead of a generic “Not available”. It is also a sentence front-desk staff could repeat.

3

### Two exits on the upgrade screen

“Upgrade to Pro” sits next to “See classes I can book today”. The member can leave with a bookable class instead of a sales decision.

How I got to decision 1

V1**Rejected**

### ~~Hide classes a member can't book~~

Clean, but it hides Pro classes from the members most likely to upgrade, and the schedule looks incomplete.

V2**Rejected**

### ~~Show all, block at checkout~~

Moves the surprise one step earlier. It behaves like a paywall.

V3**Chosen**

### Eligibility visible in the list

An access state on every schedule row, checked again on detail, with an upgrade path that has a real alternative.

Five access states, one component

Included Pro required Pro · included Booked Waitlist only

Each state has a label, an icon and a structural cue (dimming, dashed border), so it reads in greyscale and for colour-blind users. Waitlist is a capacity state and never borrows tier styling.

Blocked path · schedule to booked Pro class

9:41

![Schedule](img/cf-schedule.jpg)

**1 · Schedule**Locked classes stay visible but can't be booked.

9:41

![Access check](img/cf-check.jpg)

**2 · Access check**Card held vs card required, named by studio.

9:41

![Compare tiers](img/cf-compare.jpg)

**3 · Compare**What each tier opens, side by side.

9:41

![Review membership change](img/cf-review.jpg)

**4 · Review**Review the membership change and price difference.

9:41

![Pro unlocked schedule](img/cf-unlocked.jpg)

**5 · Unlocked**New studios open on the same schedule.

9:41

![Book Pro class](img/cf-booked.jpg)

**6 · Booked**Confirms the gate will open.

Concept screens · drag or use arrows

Prices and membership terms in the screens are placeholders, not CityFitness policy.

Edge case · a class changes studio after people have booked

A class moving between studios is one scenario that could create rule drift if studio and tier requirements are maintained separately. In the concept, the club manager re-tags every affected session in one bulk action and sees how many existing bookings change before confirming.

The harder question is what happens to those bookings. I considered three options: honour them, cancel them with a notice, or offer the upgrade. I defaulted to honouring them and flagging them for the front desk, because cancelling silently recreates the refused-door problem. **This is unresolved:** honouring a booking only works if the gate can let a Black Card member into Studio 3 once, and I don't know whether it can.

Hot Power Yoga moves to Studio 3 · 14 sessionsIllustrative · 9 bookings affected

Mon–Fri 7:00 · 5 sessionsBlack Card → Pro

Sat–Sun 8:30 · 4 sessionsBlack Card → Pro

Tue/Thu 18:00 · 5 sessionsBlack Card → Pro

Existing bookings · 9Honour + flag for desk

Access-state component system

![Style guide: layout rules, access state tokens, schedule row, buttons and membership badges](img/cf-system.jpg)

06

## Trade-offs

The tensions below are likely ones, not negotiations I took part in. The decisions and costs are mine.

| Decision | Likely tension | What I gave up |
| --- | --- | --- |
| Show locked classes | Hiding them reduces confusion but removes the place members discover Pro. Showing them risks frustration. I chose visibility with clear eligibility, so the member understands the difference before committing. | A longer schedule, partly offset with “I can book” and “Needs upgrade” filters |
| Two exits on the upgrade screen | Upgrade conversion (likely Sales) vs fewer complaints (likely CS) | Less upgrade pressure per view |
| Reuse the tier the gate already reads Proposed architecture | A new permission model would be more flexible, but means changing gate configuration | Rules beyond tier, such as one-off passes, don't fit yet |
| Narrow first release | Coverage vs a scope I could reason about properly | Personal training and guest passes wait for phase two |

07

## What I'd test next, and what it would make measurable

Nothing here has been validated. These are the first three things I'd check, and the numbers the design would let each team track.

1 · Does the failure happen today?Front-desk conversations at one club · refused-entry ticket tags

2 · Can members tell what's bookable before tapping Book?Usability test, 5 Black Card members

3 · Can the gate read a class-level tier?Engineering review of the gate controller

What this design would make measurable

| Team | KPI | Direction | Baseline source | Design lever |
| --- | --- | --- | --- | --- |
| Customer Success | Refused-entry tickets per 1,000 bookings | **↓**Down | Support ticket tags | Access check before booking |
| Club operations | Manual gate overrides per club, per week | **↓**Down | Gate override log | Message names the studio and the card |
| Club manager | Premium spots held by ineligible bookings | **↓**To zero | Booking records | Book disabled at the source |
| Sales | Pro upgrades started in-app | **↑**Up | Membership billing | Tier compare |
| Sales & CS | Upgrade vs “classes I can book” exits | Track ratio | App analytics | Two exits on the upgrade screen |
| Engineering | Tier-rule mismatches, booking vs gates | **↓**To zero | Incident log | One tier attribute |

08

## Reflection

The view / book / attend split did more work than any screen.Once it existed, most interface decisions followed from it.

I kept a second path to bookable classes on the upgrade screen.Forcing the upgrade decision would have turned an information screen into a paywall.

Still open: existing bookings when a class changes studio.It depends on how the gate handles a one-off exception, which I couldn't find out from outside.

[← Back**All work**](#home)[Next case**Te Papa Families →**](#te-papa)

**Case 02**Te Papa FamiliesSelf-initiated concept

# A concept for turning venue data into *lower-friction* family visits.

I imagined Te Papa, New Zealand's national museum, as the first venue for a visitor-flow platform. It pairs a family navigation app with a staff alert workflow and a role model, designed around a hypothetical service spanning six museum functions. No museum staff were involved.

My role

Sole designer, end to end

Project type

Self-initiated concept, not client work

Stakeholder groups modelled

Visitor Experience, Front-of-house, Security, Venue Ops, Curatorial, IT

Evidence

Public visitor information and desk research

Crowd forecast

9:41

![Exhibit crowd forecast by hour, showing the best time to visit](img/s06.webp)

Staff alert

9:41

![Lost-child alert: one tap alerts staff and shows the child's card](img/s11.webp)

Nearest facility

9:41

![Map guiding the family to the nearest family toilet, one minute away](img/s05.webp)

Visitor app · staff workflow · ops dataConcept screens

Scope**13**core screens across planning, live route and alerts

Scope**6**roles in the permission model

Design constraint**Floor**level occupancy only, no room-level sensing

Design constraint**0**visitor accounts. Child data stays on the phone.

1. [*01*Context](#tp-context)
2. [*02*The problem](#tp-failure)
3. [*03*Evidence](#tp-evidence)
4. [*04*System model](#tp-model)
5. [*05*Design decisions](#tp-design)
6. [*06*Trade-offs](#tp-tradeoffs)
7. [*07*Outcomes](#tp-next)
8. [*08*Reflection](#tp-reflection)

01

## Context

Families use the app, but they aren't the customer. The venue would buy it, and its staff would run the workflows behind it.

BuyerMuseum / venue operations leadership · hypothetical

End usersFamilies with children under 8

Internal usersFront-of-house, Security, Venue Ops, Curatorial

AdministratorsIT & Privacy

**Goal I set.** Help families decide where to go while they're already in the building, and give staff a clear handover for urgent requests. Because the buyer is a venue, every component also had to be reusable by another venue with its own branding and floors.

Self-initiated concept. Not commissioned by, affiliated with or endorsed by Te Papa.

02

## Family visits create several operational demands at once.

Five demands, each landing on a different museum function. I treated them as hypotheses that the platform would need to prove.

Five demands All assumed

Wayfinding questions at the info deskVisitor ExperienceToilets, lifts and exits are the questions I'd expect most often from families.

Crowd management on busy floorsVenue OpsFamilies may arrive at the busiest exhibit at the busiest time.

Lost-child incidentsSecurityA parent who searches alone first reaches staff later, often without a description ready.

Short visitsCommercialTired children can end a visit early.

App adoptionDigital & ITAn account wall before any value tends to lower uptake.

Constraints I assumed

Occupancy data is floor-level onlyNo room-level sensorsThe route can know that Level 3 is busy, but not which gallery is causing the bottleneck.

Privacy Act 2020: children's dataNo accounts, on-device by default

Bicultural obligation: te reo Māori in v1Not a later phase

Patchy in-building connectivityOffline map required

No new staff hardwareReuse host devices

03

## Evidence & uncertainty

This is a self-initiated concept. No Te Papa staff or museum data were available, so I separated public evidence from the assumptions I used to model the service.

**3** observed**3** assumed**3** proposed**6** unvalidated15 statements

ObservedPublic evidence or my own audit

**Public visitor information.** Te Papa's public visitor information covers floors, facilities and family visits. I used it to map the basic navigation and facility context available to visitors.

**Current digital experience.** I reviewed the publicly available visitor experience and used the existing account / sign-up requirement as an input into the no-account entry concept.

**Operational information available to the concept.** The design uses floor-level occupancy, facility locations and exhibit metadata as inputs. These are design inputs, not evidence that Te Papa currently combines these data sources in this way.

AssumedWorking assumptions, because I had no access

**Family needs.** I assumed that parents visiting with young children may need quick access to toilets, lower-effort routes, crowd information and help during urgent situations.

**Staff workflow.** I modelled six potential stakeholder groups (Visitor Experience, Front-of-house, Security, Venue Ops, Curatorial / Learning, and IT / Privacy) and gave each a plausible operational need.

**System constraints.** I assumed floor-level rather than room-level occupancy, existing staff devices, limited in-building connectivity, and a requirement to minimise children's personal data.

These assumptions let me pressure-test the product across multiple roles, but they were not confirmed through stakeholder interviews.

ProposedMy design decisions

**A visitor-flow service connecting three layers:** family planning and routing; live operational information; and a staff workflow for urgent requests.

**A permission model that limits child information by role and time.** A parent can raise an alert, while Front-of-house and Security receive only the information required to respond.

**A no-account entry point.** Family setup information is stored on the device, rather than requiring an account before the visitor gets any value.

UnvalidatedHypotheses that need research, testing or data

I did not validate whether:

- families actually leave early because children become tired;
- crowd peaks create the specific bottlenecks modelled;
- parents currently search for a lost child before contacting staff;
- Front-of-house staff experience the proposed volume of routine questions;
- the proposed workflow would reduce staff workload or incident-response time;
- families would use live crowd information to change their route.

These are hypotheses for future interviews, usability testing and, if the concept were adopted, operational measurement.

Methods

Public visitor informationFloors, facilities, family info

Role and process mapping6 stakeholder groups, assumed

Journey map: first question to closed incidentFamily + staff

Privacy and bicultural reviewPrivacy Act 2020 · te reo Māori

04

## System model

Six stakeholder groups I used to pressure-test the concept, one permission matrix, and one cross-role workflow.

Stakeholder model · assumptions, not interviews

Visitor

### Parent / caregiver

Nearest toilet and a plan that fits the kids' energy, without signing up.

Staff · floor

### Front-of-house host

Fewer repeat questions and a clear handover when something is urgent.

Staff · escalation

### Security lead

A description of the child and the last known floor, fast.

Operations

### Venue Ops manager

Spread crowds without signage changes or extra staff.

Content

### Curatorial / Learning

Owns exhibit data like noise, light and hands-on. Must stay accurate.

Governance

### IT & Privacy

No new store of personal data, an audit trail, roles they can administer.

Permission & access control

The parent owns the child profile and it stays on their phone. A host gets scoped access only when an alert is raised. Security can see and close every alert. Venue Ops sees counts, never personal data. The shared profile is deleted when the case closes.

| Role | Child profile | Live alert | Crowd thresholds | Exhibit metadata | Audit log |
| --- | --- | --- | --- | --- | --- |
| Parent | Own | Raise | — | View | — |
| Front-of-house host | On alert | Accept | — | View | — |
| Security lead | On alert | All · close | — | — | Own cases |
| Venue Ops | Never | Count only | Edit | — | — |
| Curatorial | Never | — | — | Edit | — |
| IT admin | Never | — | — | — | Full |

Full standing accessScoped time-boxed or one case— no access

Workflow · lost-child alert across roles Proposed

Parent**Taps “Alert staff now”**

Child card and current floor are shared.

Step 1

Host**Nearest host accepts**

Sees the child card, watches the exits on that floor.

Step 2

Security**Escalates if unresolved**

All hosts see the alert. Meeting point confirmed.

If needed

Parent / Host**“We've found her”**

Either party can close the case.

Close

System**Data revoked**

Shared profile deleted. Anonymised audit entry kept.

Auto

05

## Design decisions

Three decisions shape the concept.

1

### Plan in 30 seconds, then reroute

Kids, pram and energy level produce a route that changes when a floor gets busy. The visitor confirms every change. I rejected an itinerary builder (too much setup at the door) and a live heatmap (needs room-level data I couldn't assume).

2

### No account; child data shared only on alert

The app is useful without signing up. The child's details leave the phone only when a parent raises an alert, and only for that case.

3

### Venue-agnostic tokens and components

Colours, type and floor data are tokens, so another venue could reuse the layouts with its own brand.

How I got to decision 1

V1**Rejected**

### ~~Itinerary builder~~

Pick exhibits, reorder by drag and drop. Too much setup for a parent at the door, and the plan breaks as soon as a floor gets busy.

V2**Rejected**

### ~~Map-first heatmap~~

Needs room-level data I couldn't assume a venue has, and is hard to read one-handed while pushing a pram.

V3**Chosen**

### Plan in 30 seconds, then reroute

Floor-level data only, with a three-state crowd meter.

Key flows

9:41

![Welcome screen](img/s01.webp)

**No-account entry**Useful before any sign-up.

9:41

![Family setup](img/s02.webp)

**30-second setup**Three inputs, stored on the device only.

9:41

![Home with live occupancy](img/s03.webp)

**Floor occupancy**Turned into a route.

9:41

![Swap suggestion](img/s04.webp)

**Suggested crowd swap**The visitor decides.

9:41

![Exhibit detail](img/s06.webp)

**Exhibit detail**Noise, light and hands-on fields from the content team.

9:41

![Plan modes](img/s07.webp)

**Plan modes**Balanced, quieter or shorter.

9:41

![I need now](img/s09.webp)

**“I need now”**Toilet, seat, snack, exit from any screen.

9:41

![Staff alert](img/s11.webp)

**Staff alert**Scoped, time-limited share with hosts and security.

9:41

![Visit summary](img/s12.webp)

**Opt-in at exit**Marketing consent asked at the end of the visit.

Concept screens · drag or use arrows

Ops console · bulk edits

In the concept, Curatorial can update noise, light and hands-on fields for several exhibits at once, and Venue Ops can set busy thresholds for every floor in one edit. Each change shows a preview of what visitors will see before it publishes.

2 exhibits selected · Set noise level → QuietIllustrative · preview before publish

Te Taiao Nature · hands-onSome → Quiet

Pacific Worlds · galleryNo change

Dinosaurs · Level 3Not selected

Reusable design system

![Design system: five layout rules, colour tokens, crowd meter, type scale, row unit and buttons](img/s14.webp)

Five layout rules, one row component and a three-state crowd meter, built as Figma components with tokens.

06

## Trade-offs

The tensions are ones I'd expect, not meetings I sat in. The decisions and costs are mine.

| Decision | Likely tension | What I gave up |
| --- | --- | --- |
| No account; opt-in at the end of the visit | Marketing data vs visitor adoption | Fewer CRM records, but with real consent |
| Suggest a crowd swap, with Keep as an option | Venue Ops crowd goals vs visitor control | Less load moved than forced rerouting would |
| Floor-level data with a three-state meter | Precision vs sensor cost | The route can't tell which gallery is busy |
| Alerts on existing host devices | A purpose-built staff app vs no new hardware | A simpler staff interface in v1 |
| Venue-agnostic components | One venue's needs vs reuse | More design time up front |

07

## Outcomes & success metrics

Status: unvalidated This concept was not launched, so there are no measured business or user outcomes. The metrics below describe what I would measure if the product were implemented.

Proposed product outcomes

Visitor experience

- Fewer repeated requests for basic facility and navigation information.
- More families completing their intended visit rather than leaving early.
- More visitors successfully adapting their route when a floor becomes busy.

Staff operations

- Lower volume of routine navigation requests reaching Front-of-house.
- Shorter time from a lost-child alert being raised to a staff member accepting the case.
- Fewer manual handovers between Front-of-house and Security.

Operations

- Increased use of existing floor-level occupancy data in visitor-facing decisions.
- Fewer situations where the visitor route sends families toward a crowded floor.

Commercial

- Longer family visits and more opportunities for café and store visits.

Measurement plan All proposed

| Area | Metric |
| --- | --- |
| Front-of-house | Routine navigation requests per visitor |
| Visitor experience | Early-exit rate for family visits |
| Routing | Percentage of suggested reroutes accepted |
| Security | Median time from alert to case acceptance |
| Security | Median time from alert to case closure |
| Operations | Visitor-facing routes triggered by crowd conditions |
| Commercial | Family visit duration / café or store conversion |

What the prototype demonstrates

The workflow **can represent**:

- floor-level occupancy as a routing input;
- role-specific access to child information;
- a time-limited staff alert;
- facility-aware routing;
- configurable exhibit metadata.

These are design outcomes, not measured product outcomes.

What remains unvalidated

The concept does not yet show that the system would:

- reduce support requests;
- reduce incident-response time;
- increase visit duration;
- reduce early exits;
- increase café or store spend;
- change crowd distribution.

Those claims need user research, usability testing and operational data after implementation.

What I'd test first

1 · Do families accept a crowd swap?Field test with a clickable prototype on a busy weekend

2 · Does the alert handover match how staff work?Walkthrough with front-of-house and security leads

3 · Can host devices receive alerts?Check with IT

08

## Reflection

I first treated the family app as the main product.Mapping the six stakeholder groups made the staff alert workflow a core part of the scope.

Floor-level data sets a hard limit.Without room-level sensors, the route can only know that Level 3 is busy, not which gallery is causing it.

Still open: would families actually change their route?That needs field testing. A prototype can't answer it.

[← Previous case**CityFitness**](#cityfitness)[Next**Skills & tools →**](#skills)

Skills & tools

# What I bring to a B2B SaaS product team.

Each capability links to where you can see it. Both projects are self-initiated, so the links show how I reason, not client delivery.

## Capabilities

### Permission & access control

Role matrices, scoped and time-boxed access, and entitlement models that more than one system has to read.

[CityFitness · view / book / attend model](#cf-model)[Te Papa · 6-role permission matrix](#tp-model)

### Workflow design for multi-role products

Handoffs, escalation paths and states that hold up when a task moves between roles.

[CityFitness · booking-to-gate failure scenario](#cf-failure)[Te Papa · lost-child alert across roles](#tp-model)

### Admin tooling & bulk operations

Configuration at scale, with a preview of who is affected before a change publishes.

[CityFitness · bulk re-tag and existing bookings](#cf-design)[Te Papa · bulk exhibit metadata](#tp-design)

### Operational data & metrics

Turning ops data into a decision for each role, and naming which KPI a design would make measurable.

[CityFitness · KPIs by team](#cf-next)[Te Papa · KPIs by function](#tp-next)

### Research & problem framing

Desk research, app walkthroughs, role and process mapping, and a clear line between what I observed, assumed and still need to test.

[CityFitness · evidence & uncertainty](#cf-evidence)[Te Papa · evidence & uncertainty](#tp-evidence)

### Stakeholder modelling

I map the likely owner of each workflow and KPI, then use the conflicts between them to pressure-test a concept.

[CityFitness · upgrade vs trust](#cf-tradeoffs)[Te Papa · five likely tensions](#tp-tradeoffs)

### Design systems

Tokens for rebranding across venues, and state components engineering can implement once.

[CityFitness · access-state component set](#cf-design)[Te Papa · venue-agnostic tokens](#tp-design)

### Constraints & compliance

Privacy Act 2020, data minimisation, audit trails and existing hardware treated as design inputs.

[CityFitness · existing gate hardware](#cf-failure)[Te Papa · privacy and bicultural constraints](#tp-failure)

## Tools

Figma is where I spend most of my day.

### Design & prototype

- Figma
- Components & variables
- Auto layout
- Interactive prototypes

### Research & testing

- FigJam
- Maze
- Dovetail
- Interview guides

### Delivery

- Jira
- Confluence
- Notion
- Dev handoff specs

### Data

- Amplitude
- Spreadsheets
- Support-ticket coding

Let's build the *boring, critical* parts well.

Open to Product Designer roles in B2B SaaS.

`pennywei595@gmail.com`

Penny Wei · Product Designer[Back to top ↑](#home)