import './documents.css'

const Documents = () => {
    // When ready to add toggle functionality, add onClick={handleToggle} to desired elements
    // const handleToggle = () => {
    //     const docContentEl = document.querySelector('.documents-content')
    //     docContentEl.classList.toggle('docs-open')
    // }

    return (
      <section id="documents">
        <h2 className="section-title toggle-section">
          Documents: a cheat sheet.
        </h2>
          <p>
            In the work <strong>visa application</strong> and{" "}
            <strong>contract</strong> completion process, you will be asked to
            submit many documents: some as digital files, others as hard copies,
            and some in both forms.
          </p>
          <p>
            You will likely have to submit documents to both HKDL's HR
            department and a company called Fragomen that helps us get our work
            visas from the Immigration Dept.
          </p>
        <h3 className="special-note">
          ⭐️⭐️⭐️ By this point, all of us should have received
          our contracts from HKDL and our visa
          application materials from Fragomen, the agency handling our immigration
          cases. I know several of us have electronically signed our contracts and mailed off our visa application materials already. While we aren't in a huge rush yet, do not delay this process. If anything goes wrong, you'll need as much time as possible to ensure everything is approved before we leave for HK. 
          The visas take 4-6 weeks to process and approve. ⭐️⭐️⭐️
        </h3>
        <p>
          Eventually, when you FedEx your visa application materials to HK,
          make sure you <em>save your receipt(s)</em>, and make sure you{" "}
          <em>bring those receipts with you to HK</em> so that Disney can
          reimburse you.
        </p>
        <p>
          Here is a cheat sheet of all the appropriate paperwork to collect. Especially for newbies, it may
          take a hot minute to collect everything, so I recommend starting to
          collect these materials now so that you can mail them or email them as soon as possible. 
        </p>
        <h4 className="special-note">
          As of 2022, Hong Kong has been issuing digital e-visas instead of
          mailing us hard copies. These e-visas come with a QR code you should
          print and also save digitally.
          <br />
          <br />
          Additionally, as of 2022, HKDL now allows you to complete your
          contract signing electronically. You may still need to print a hard
          copy of the signed contract to include with your visa application.
        </h4>
        <h3>
          Items you'll likely need in <strong>digital form</strong>:
        </h3>
        <ol className="documents-ol">
          <li>
            <span>Copy of your passport info and signature page(s)</span>
          </li>
          {/* <li>
            (Returning carolers only){" "}
            <span>
              Copy of your previous Hong Kong visa(s) and landing slip(s).
            </span>
          </li> */}
          <li>
            <span>Copy of your updated CV/resume</span>
          </li>
          <li>
            <span>Copy of your signed HKITP employment contract.</span> 
          </li>
          <li>
            <span>The visa application form ID 990A (original required)</span> 
            <em>
              (They will provide a link to this file, arguably the most
              important document of the bunch.)
            </em>
          </li>            
        </ol>
        <h3>
          Items you'll likely need <strong>hard copies</strong> of:
        </h3>
        <ol className="documents-ol">
          <li>
            <span>Passport-style photos</span>{" "}
            <em>
              You may have to purchase and take these photos at FedEx/Kinko's
              or any place that takes passport photos.
            </em>
          </li>
          <li>
            <span>
              Copy of your university degree/diploma(s) or academic
              transcript(s)
            </span>
            .{" "}
            <em>
              (This was one of the ones that took me a hot minute to find.)
            </em>
          </li>
          <li>
            <span>
              Copy of your relevant training or professional certificate(s)
            </span>{" "}
            (if any).
          </li>
          <li>
            <span>Signed reference letters,</span> or copies of your signed
            employment contracts, staff identity cards, brochures, newspaper
            articles or pamphlets, etc. with your name or photos evidencing
            your relevant experience. John Hartmann has written recommendation
            letters for carolers, if you need one.
          </li>
          <li>
            <span>
              Copies of a few of your performance photos with identifying info
            </span>{" "}
            (3 to 4 is sufficient).
          </li>
          <li>
            <span>The visa application form ID 990A (original required)</span> 
            <em>
              (They will provide a link to this file, arguably the most
              important document of the bunch.)
            </em>
          </li>
        </ol>
        <h4 className="special-note">Note that HK uses differently sized paper by default than we do in the US. They use "A4" while we use "US Letter." As a result, you may need to adjust your printer settings to ensure the larger A4 document completely fits onto US Letter-sized paper. This is particularly important for the visa application form, which contains an important barcode that will be cut off if the document is not resized to fit onto US Letter-sized paper.</h4>
        {/* <h4 class="special-note">
          All of this is of course subject to change, and the info offered
          here is simply what previous carolers have experienced. Don't @ me
          if this year they suddenly require stuff that isn't listed on this
          webpage. 😜
        </h4> */}
        <p>
          When you pack for HK, don't forget to bring your passport (Duh.), your HK employment visa QR code (both
          electronic and printed), hard copies of all your contract materials,
          and your receipt from mailing your visa application materials.
        </p>
      </section>
    );
}

export default Documents