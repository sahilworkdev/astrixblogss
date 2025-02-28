import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Terms and Conditions | Astrix`,
    description: "Terms and Conditions",
  };
}

export default function TermsPage() {
  return (
    <div
      className={`relative flex flex-col min-h-[100vh] gap-4  px-4 mobile:px-8 py-10   max-w-8xl`}
    >
      <header className={`text-left`}>
        <h1 className=" text-3xl font-bold uppercase text-green-100 font-nohemi">
          Terms and Conditions
        </h1>
      </header>
      <main className="flex flex-col h-[80vh]  overflow-y-scroll custom-scrollbar gap-5 px-4 font-mulish">
        <section className="space-y-1">
          <h2 className="text-xl font-medium font-nohemi">Last Updated: 15 March 2024</h2>
          <p className="font-mulish">
            Please read these Terms of Use carefully as they set out the basis
            on which you are allowed to use the mobile software application (the
            “App”) or the websites (together with the App, collectively the
            “Services”) offered by Tikitin Solutions Private Limited (“Astrix”,
            “we”, “us” or “our”). If you have any questions about them or do not
            accept them, please contact us at &nbsp;
            <Link href="mailto:hello@astrix.live" className="italic font-medium underline">hello@astrix.live</Link> &nbsp;and before
            registering with the Services. We may change these Terms of Use from
            time to time so please check our website at www.astrix.live from
            time to time for any updates to them to ensure that you are happy
            with any changes. Your continued use of any part of the Services
            following any update to these Terms of Use will constitute your
            acceptance of those changes.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">OVERVIEW</h2>
          <p className="font-mulish">
            Your access to and use of the Services is subject to your acceptance
            and compliance with these Terms of Use. You cannot access or use the
            Services without accepting these Terms of Use, and Privacy
            Policy(which is incorporated into these Terms of Use by this
            reference). These Terms of Use, the Privacy Policy and any such
            applicable policies constitute an electronic record under the
            Information Technology Act, 2000 as amended and the relevant rules
            made thereunder as applicable, and the amended provisions pertaining
            to electronic records in various statutes under applicable Indian
            laws.
          </p>
          <p className="font-mulish">
            It is clarified that terms and conditions specific to an event in
            respect of which ASTRIX has facilitated sale of tickets by use of
            the Services (“Event”) shall be published on the relevant Event page
            accessible through use of the Services. ASTRIX publishes such
            information as provided by and on behalf of the Event Partners
            associated with such Event. In the event of any conflict between the
            Event-related terms and conditions, and this Terms of Use, you agree
            that the Event-related terms and conditions shall prevail and be
            binding on you at all times.
          </p>
          <p className="font-mulish">
            You must be over 18 to download the App and access and use the
            Services. If you are under 18 then you can only download the App and
            use the Services with permission from your parent or guardian.
          </p>
        </section>
        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">GENERAL SERVICE DESCRIPTION</h2>
          <p className="font-mulish">
            These Terms of Use deal with your access to the Services. The
            Services enable you to acquire tickets for the Events, providing you
            with entry into venues and other establishments. We make available
            tickets on behalf of third party Event Partners who are not
            connected in any way with ASTRIX. When you purchase a ticket, you
            obtain a right to attend the Event as granted by the Event Partner,
            as further described in our Purchase Terms. The third party Event
            Partners are responsible to you for the relevant Events, and we are
            not liable for the Event or any actions or inactions of the Event
            Partners.
          </p>
          <p className="font-mulish">
            The Services allow you to register an account which is specific to
            you. To provide you with access to the Services, we must collect,
            process, and store certain data including, at times, your personal
            data, which we will do in accordance with these Terms of Use and our
            Privacy Policy.
          </p>
          <p className="font-mulish">
            The Services will also provide you with gig, competition, product,
            and event recommendations based on your preferences, musical tastes,
            purchase history, and what people like you are going to. These
            recommendations will be shown to you via the Discovery page in the
            App. You can also buy tickets and products, or share event, music,
            or product recommendations with your friends on social media such as
            Facebook.
          </p>
          <p className="font-mulish">
            Tickets purchased through the Services will be subject to our
            Purchase Terms, and any additional terms and conditions provided to
            you by the Event Partner(s) and the venue of the Event. Entry to an
            Event will be in accordance with the rules and regulations of the
            Event Partner(s) and venue of the Event.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">COPYRIGHT</h2>
          <p className="font-mulish">
            The entire content included on the Services, including but not
            limited to text, graphics, or code, is copyrighted as a collective
            work under the Indian and all other copyright laws of the world, and
            is the sole property of ASTRIX or is appropriately licensed by
            ASTRIX from the relevant owners thereof. At no point in time, will
            you have any rights and/ or claim to have acquired any rights in and
            to any part or portion of the Services and/ or any content contained
            therein, in any manner whatsoever.
          </p>
          <p className="font-mulish">
            You may display and, subject to any expressly stated restrictions or
            limitations relating to specific material, download or print
            portions of the material from the different areas of the Services
            solely for your own non-commercial use.
          </p>
          <p className="font-mulish">
            Any other use, including but not limited to the reproduction,
            distribution, display, or transmission of the content on the
            Services is strictly prohibited, unless specifically authorized by
            ASTRIX in writing.
          </p>
        </section>
        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">TRADEMARKS</h2>
          <p className="font-mulish">
            All trademarks, service marks and trade names of&rsquo;ASTRIX&rsquo;
            used on Services are trademarks or registered trademarks of ASTRIX
            FM Holdings Limited. At no point in time, will you have any rights
            and/ or claim to have acquired any rights in and to any part or
            portion of the &rsquo;ASTRIX&rsquo; trademarks and/ or logos, in any
            manner whatsoever.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">LIABILITY</h2>
          <p className="font-mulish">
            These Terms of Use do not exclude our liability (if any) to you for:
          </p>
          <ul className="list-disc list-inside font-mulish" >
            <li>personal injury or death resulting from our negligence;</li>
            <li>
              fraud; or any matter which it would be illegal for us to exclude
              or restrict or to attempt to exclude or restrict our liability.
            </li>
          </ul>
          <p className="font-mulish">We can&apos;t guarantee that the Services will be:</p>
          <ul className="list-disc list-inside font-mulish" >
            <li>
              compatible with any or all of your mobile devices or any software
              which you may use on your device;
            </li>
            <li>available all the time or at any specific time; or</li>
            <li>completely accurate and up to date, although we try.</li>
          </ul>
          <p className="font-mulish">
            If we fail to comply with our Terms of Use, Purchase Terms or
            Privacy Policy, or otherwise cause you loss due to our action or
            inaction (for example, due to our negligence) we are only
            responsible for loss or damage you suffer that is a direct and
            foreseeable result of our breach of those terms or our action or
            inaction, and we are not responsible for any loss or damage that is
            not directly foreseeable, or not our fault. We have no liability to
            you for any indirect loss or for any loss of profit, loss of
            revenue, loss of business, loss of goodwill, reputational damage or
            loss, business interruption or loss of data you may suffer in
            connection with your use of the Services or any materials available
            through the Services, or any related services provided by us. As
            mentioned in Clause 3.1, we are not responsible for the Events or
            the actions or inactions of the Event Partners, and we hereby
            disclaim all liability in relation thereto. Furthermore, we are not
            responsible for any losses that you suffer as a result of
            malfunctioning or failure of your device, or errors, delays or
            interruptions in the operation of the Services, or for anything
            which is beyond our reasonable control.
          </p>
          <p className="font-mulish">
            You may have other rights granted by law in addition to these Terms
            of Use. These Terms of Use will override any such rights, unless
            this is not permitted by law.
          </p>
        </section>
        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">
            PRESALES, REMINDERS, SAVED EVENTS, WAITING LISTS AND GROUP PLANS
          </h2>
          <p className="font-mulish">
            Certain events will allow you to sign up for a
            &rsquo;reminder&rsquo; to be notified (via SMS or push notification)
            when tickets for an event are placed on sale, or to
            &rsquo;save&rsquo; an event meaning you will be notified (via SMS or
            push notification) when the event date is approaching and/or if
            there are only a few tickets remaining for sale. Tickets are sold on
            a first-come-first-sold basis and you must purchase the tickets in
            the same manner as any other transaction. You acknowledge that
            signing up to a presale notification, or saving an event, does not
            guarantee you will successfully purchase a ticket. Presale, reminder
            and saved event notifications may also include additional
            information about the event.
          </p>
          <p className="font-mulish">
            ASTRIX&apos;s in-app feature, &apos;Groups&apos; allows you to
            create a &apos;Group&apos; within the ASTRIX app, in which all Group
            members are able to (and will be notified when any other member)
            suggests events, votes for events of interest, and/or purchases a
            ticket to an event. All members of a Group can generate a link which
            allows them to invite others to also join the Group, and anyone can
            join the Group with this link, subject to them having an ASTRIX
            account. All members of a Group are able to leave the Group at any
            time, and Group owners have the ability to remove members from the
            Group or to delete the Group altogether.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">USER CONDUCT</h2>
          <p className="font-mulish">
            You can use the Services for your own personal use, and agree not to
            use it for any purpose prohibited by these Terms of Use. You are
            solely responsible for all your activities in connection with the
            Services.
          </p>
          <p className="font-mulish">
            You will need to register an account in order to purchase a ticket
            or other item, or to access certain features (such as the waiting
            list feature). When registering an account, you will be required to
            provide your name, mobile number and email address. Any tickets you
            purchase via the Services will be issued to your name as shown in
            your account details. You agree to provide us with accurate and
            up-to-date information as requested when registering your account,
            and you agree to update your details promptly if there are any
            changes.
          </p>
          <p className="font-mulish">
            In order to use certain aspects and features of the Services, you
            must have a compatible mobile device, access to the internet, mobile
            messaging and data services. Fees and charges may apply to your use
            of the internet or mobile messaging services. You agree that you are
            responsible for any such fees or charges where these apply.
          </p>
          <p className="font-mulish">You also agree that:</p>
          <ul className="list-disc list-inside font-mulish" >
            <li>
              you will not interfere or attempt to interfere with the proper
              functioning of the Services or disrupt the operations or breach
              the security of the Services;
            </li>
            <li>
              you will not reproduce, duplicate, copy, sell, resell, remove,
              modify or exploit the Services or their content or its software in
              any way;
            </li>
            <li>
              you will not use software, devices, or other manual or automated
              processes to access any portion of the Services, including but not
              limited to use of any scripts or web crawlers; and
            </li>
            <li>
              you will not use the Services in any way that is fraudulent or
              illegal.
            </li>
          </ul>
          <p className="font-mulish">
            As covered under Clause 4 and 5, the Services and their contents are
            protected by intellectual property rights which either belong to us
            or are licensed to us to use. You may not copy or use them without
            our consent in writing.
          </p>
          <p className="font-mulish">
            We reserve the right to cancel any transaction or remove, suspend,
            edit or modify your access to the Services at our discretion if we
            have reason to believe you have used the Services in contravention
            of these Terms of Use. Any and all ticket(s) purchased as part of
            such transaction will be void.
          </p>
          <p className="font-mulish">
            If you or any third party is aware of any breach of these terms of
            use which could potentially damage or infringe our property,
            protectable rights or interests, you should immediately contact
            ASTRIX via email at &nbsp;
            <Link href="mailto:hello@astrix.live" className="italic font-medium underline">hello@astrix.live</Link> with details of the alleged
            infringement.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">INDEMNIFICATION</h2>
          <p className="font-mulish">
            You agree to indemnify, defend and hold harmless ASTRIX (including
            its directors, employees, officers, affiliates, consultants and
            agents) (each an “Indemnified Party”) from and against any and all
            losses, liabilities, claims, damages, costs and expenses (including
            legal fees and disbursements in connection therewith and interest
            chargeable thereon) asserted against or incurred by Indemnified
            Parties that arise out of, result from, or may be payable by virtue
            of, any breach or non-performance of any representation, warranty,
            covenant or agreement made or obligation to be performed by you,
            pursuant to these Terms of Use, or any acts committed by third
            parties not authorized by us, or in relation to any third party
            claims raised against Indemnified Parties in relation to the
            foregoing.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">CLOSING YOUR ASTRIX ACCOUNT</h2>
          <p className="font-mulish">
            These Terms of Use commence from the date that you access and or use
            the Services until the time that these Terms of Use with us are
            terminated. There is no minimum time period of when these Terms of
            Use will be in effect.
          </p>
          <p className="font-mulish">
            You can uninstall the App at any time, using the functionality
            within the App or your mobile device. Please note though that
            deleting the App will not automatically result in the closure of
            your account. To close your account, please email us at
            &nbsp;
            <Link href="mailto:hello@astrix.live" className="italic font-medium underline">hello@astrix.live</Link> &nbsp;and
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">
            THIRD-PARTY CONTENT AND SERVICES
          </h2>
          <p className="font-mulish">
            The Services may integrate with social networking platforms (such as
            Facebook), music streaming platforms (such as Spotify) and other
            third party applications. Your use of any integrated applications
            will be subject to those third party&rsquo;s terms of use and their
            privacy policies.
          </p>
          <p className="font-mulish">
            When you access third party websites or applications from the
            Services you do so at your own risk. Any third party websites or
            applications are outside of our control, and we are not responsible
            for the content, functions, accuracy, legality, appropriateness or
            any other aspect of such websites or applications.
          </p>
          <p className="font-mulish">
            Sometimes ASTRIX may request additional permissions related to the
            settings on your mobile device, such as accessing your location or
            enabling push notifications in order to carry out certain actions or
            allow you to enjoy certain features. If you choose not to give us
            the necessary permissions then you may not be able to access all the
            features and functions of the Services.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className=" text-xl font-medium font-nohemi">GRIEVANCE REDRESSAL</h2>
          <h3 className=" text-lg font-medium font-nohemi">Content</h3>
          <p className="font-mulish">
            In accordance with the provisions of the Information Technology
            (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021,
            any grievances which you may have with respect to the information
            shared by you during use of the Services hereunder and its
            treatment, may be directed by you to the customer support of the
            Services. You may contact ASTRIX customer support by sending an
            email to <Link href="mailto:hello@astrix.live" className="italic font-medium underline">hello@astrix.live</Link>
          </p>
          <p className="font-mulish">
            Your complaint shall be acknowledged within 24 (twenty-four) hours
            and disposed of within 15 (fifteen) days from the date of receipt of
            complaint. If your complaint pertains to any material which exposes
            the private area, shows full nudity, depicts sexual act or is in
            nature of impersonation, the complaint shall be resolved within 24
            (twenty-four) hours from receipt of complaint.
          </p>
          <h3 className=" text-lg font-medium font-nohemi">Customer Experience</h3>
          <p className="font-mulish">
            If you have any complaint about the Services, you should contact our
            customer services department at the following email: &nbsp;
            <Link href="mailto:hello@astrix.live" className="italic font-medium underline">hello@astrix.live</Link> &nbsp;and we will try and resolve it as soon as
            possible.
          </p>
          <h3 className=" text-lg font-medium font-nohemi">GENERAL</h3>
          <p className="font-mulish">
            This Terms of Use shall be governed by and constructed in accordance
            with the laws of India and disputes arising in relation hereto shall
            be subject to the exclusive jurisdiction of the courts of Mumbai,
            India.
          </p>
        </section>
      </main>
    </div>
  );
}
