import { useState } from "react";
import "./tabs.css";
function Terms() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [user, setUser] = useState({
    Name: "",
    Deg: "",
    Sem: "",
    Phone: "",
    Date: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const getData1 = (e) => {
    const { Name, Deg, Sem, Phone, Date } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Deg,
        Sem,
        Phone,
        Date,
      }),
    };
    const res = fetch(
      "https://skill-1e6ff-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res && user.length !== 0) {
      alert("Thank you for showing interest for data science!!");
      setUser({
        Name: "",
        Deg: "",
        Sem: "",
        Phone: "",
        Date: "",
      });
    } else if (user.length.trim() === 0) {
      console.log("Please enter something");
    } else {
      alert("Something happened..");
    }
  };
  const getData2 = (e) => {
    const { Name, Deg, Sem, Phone, Date } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Deg,
        Sem,
        Phone,
        Date,
      }),
    };
    const res = fetch(
      "https://cyber-950be-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res) {
      alert("Thank you for showing interest for cyber secruity!!");
      setUser({
        Name: "",
        Deg: "",
        Sem: "",
        Phone: "",
        Date: "",
      });
    } else {
      alert("ERROR OCCURED.");
    }
    e.preventDefault();
  };
  return (
    <div className="terms" id="terms">
      <h1>CHOOSE YOUR INTERNSHIP PROGRAMME TRACK</h1>

      <div className="tab__container">
        <div className="tab__bloc-tabs">
          <button
            className={
              toggleState === 1 ? "tab__tabs tab__active-tabs" : "tab__tabs"
            }
            onClick={() => toggleTab(1)}
          >
            DATA SCIENCE
          </button>
          <button
            className={
              toggleState === 2 ? "tab__tabs tab__active-tabs" : "tab__tabs"
            }
            onClick={() => toggleTab(2)}
          >
            CYBERSECRUITY
          </button>
        </div>

        <div className="tab__content-tabs">
          <div
            className={
              toggleState === 1
                ? "tab__content  tab__active-content"
                : "tab__content"
            }
            id="data"
          >
            <h2>Data Science FastTrack : Internship Cum Training Program</h2>
            <hr />
            <p>
              Apply now for Codevita Live's Data Science FastTrack programme
              before the cohort gets full. Take advantage of a<b> 10-week </b>
              curriculum that covers everything that you need to know to
              kickstart your dream career, from scratch and at your own pace.
              <br />
              <br />
              <b>
                The Internship function would be activated once sufficient
                progress has been achieved in the course and will be based on
                the following functions:
              </b>{" "}
              <br />
              <br />{" "}
              <span className="highlight">
                - EDA, <br />
                - Supervised / Unsupervised Machine Learning,
                <br />- Sentimental Analysis
              </span>
            </p>
            <div className="tabs__list_perks">
              <div className="tabs__lists">
                <ul>
                  <li>Weekly Checkpoint Exams</li>
                  <li>Capstone Project Intensive</li>
                  <li>Lifetime Access</li>
                </ul>
              </div>
              <div className="tabs__lists">
                <ul>
                  <li>24/7 Doubt Support</li>
                  <li>Premium Career Services</li>
                  <li>Guaranteed Internship</li>
                </ul>
              </div>
            </div>
            <div className="tabs__buttons">
              <button type="submit">
                <a href="https://codevitalive.files.wordpress.com/2022/08/testimonials.pdf">
                  REVIEW TESTIMONIALS
                </a>
              </button>
              <button type="submit">
                <a href="https://codevitalive.files.wordpress.com/2022/08/dsf-syllabus-overview-5.pdf">
                  REVIEW SYLLABUS OUTLINE
                </a>
              </button>
            </div>
            <form method="POST">
              <div className="form_con">
                <div className="tabs__forms" id="fill">
                  <h4>Kindly fill up these details if you're interested.</h4>
                  <input
                    type="text"
                    className="form__name"
                    placeholder="Your Name"
                    id="form_name"
                    name="Name"
                    value={user.Name}
                    onChange={data}
                    required
                  />
                  <input
                    type="text"
                    className="form__college"
                    placeholder="Your Degree and College Name"
                    id="form_college"
                    name="Deg"
                    value={user.Deg}
                    onChange={data}
                    required
                  />
                  <input
                    type="number"
                    className="form__cur_sem"
                    placeholder="Current Sem"
                    id="form_cur_sem"
                    name="Sem"
                    value={user.Sem}
                    onChange={data}
                    required
                  />
                  <input
                    type="number"
                    className="form__number"
                    placeholder="Your Phone Number"
                    id="form_number"
                    name="Phone"
                    value={user.Phone}
                    onChange={data}
                    required
                  />
                  <input
                    type="date"
                    className="form__name"
                    placeholder="When you would like to join?"
                    id="form_date"
                    name="Date"
                    value={user.Date}
                    onChange={data}
                    required
                  />
                  <div className="tabs__buttons">
                    <button type="submit" onClick={getData1}>
                      <a href="">SUBMIT</a>
                    </button>
                  </div>
                </div>
                <div className="form__pic">
                  <img
                    src="https://media.istockphoto.com/id/1285843065/vector/online-internet-questionnaire-concept-vector-flat-cartoon-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=_9e_o7EreCZr3LmPGm57-0NjgVlLH0mJ99DmHiqW7F0="
                    alt=" "
                    className="form__pic"
                  />
                </div>
              </div>
            </form>
          </div>

          <div
            className={
              toggleState === 2
                ? "tab__content  tab__active-content"
                : "tab__content"
            }
            id="cyber"
          >
            <h2>
              Cybersecurity Evangelist Live: Training + Internship Program
            </h2>
            <hr />
            <p>
              Apply now for Codevita Live’s Cybersecurity Evangelist Live
              programme before the cohort gets full. Take advantage of a{" "}
              <b> 6-week </b>
              curriculum that covers everything that you need to know to
              kickstart your dream career, from scratch and at your own pace.
              <br />
              <br />
              <b>
                The Internship function would be activated once sufficient
                progress has been achieved in the course.
              </b>{" "}
              <br />
            </p>
            <div className="tabs__list_perks">
              <div className="tabs__lists">
                <ul>
                  <li>Weekly Checkpoint Exams</li>
                  <li>Interview Preparation</li>
                  <li>Lifetime Access</li>
                </ul>
              </div>
              <div className="tabs__lists">
                <ul>
                  <li>24/7 Doubt Support</li>
                  <li>Guaranteed Internship Opportunity</li>
                  <li>Zero to Hero in 6 Weeks</li>
                </ul>
              </div>
            </div>
            <div className="tabs__buttons">
              <button type="submit">
                <a href="https://www.dropbox.com/s/iymtpiajy8spa3v/CEL%20Student%20Testimonials.pdf?dl=0">
                  REVIEW TESTIMONIALS
                </a>
              </button>
              <button type="submit">
                <a href="https://www.dropbox.com/s/iymtpiajy8spa3v/CEL%20Student%20Testimonials.pdf?dl=0">
                  REVIEW SYLLABUS OUTLINE
                </a>
              </button>
            </div>

            <form method="POST">
              <div className="form_con">
                <div className="tabs__forms">
                  <h4>Kindly fill up these details if you're interested.</h4>
                  <input
                    type="text"
                    className="form__name"
                    placeholder="Your Name"
                    id="form_name"
                    name="Name"
                    value={user.Name}
                    onChange={data}
                    required
                  />
                  <input
                    type="text"
                    className="form__college"
                    placeholder="Your Degree and College Name"
                    id="form_college"
                    name="Deg"
                    value={user.Deg}
                    onChange={data}
                    required
                  />
                  <input
                    type="number"
                    className="form__cur_sem"
                    placeholder="Current Sem"
                    id="form_cur_sem"
                    name="Sem"
                    value={user.Sem}
                    onChange={data}
                    required
                  />
                  <input
                    type="number"
                    className="form__number"
                    placeholder="Your Phone Number"
                    id="form_number"
                    name="Phone"
                    value={user.Phone}
                    onChange={data}
                    required
                  />
                  <input
                    type="date"
                    className="form__name"
                    placeholder="When you would like to join dd/mm/yyyy"
                    id="form_date"
                    name="Date"
                    value={user.Date}
                    onChange={data}
                    required
                  />
                  <div className="tabs__buttons">
                    <button type="submit" onClick={getData2}>
                      <a href="">SUBMIT</a>
                    </button>
                  </div>
                </div>
                <div className="form__pic">
                  <img
                    src="https://media.istockphoto.com/id/1285843065/vector/online-internet-questionnaire-concept-vector-flat-cartoon-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=_9e_o7EreCZr3LmPGm57-0NjgVlLH0mJ99DmHiqW7F0="
                    alt=" "
                    className="form__pic"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="perks">
        <div class="wrapper">
          <p>What you will be getting ?</p>
          <div class="words">
            <ul>
              <li>
                <b>&gt;</b> LinkedIn profile building
              </li>
              <li>
                {" "}
                <b>&gt;</b> 24/7 Support
              </li>
              <li>
                {" "}
                <b>&gt;</b> Internship Completion Certificate
              </li>
              <li>
                {" "}
                <b>&gt;</b> Capstone Project Intensive
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper_2">
          <p>
            &gt; Commitment : <span>5-6 hours a week/1 month</span>
          </p>
          <p>
            &gt; Ideal For :
            <span>
              {" "}
              Students pursuing any technical/managerial field at a
              graduate/undergraduate level
            </span>
          </p>

          <p>
            &gt; Pricing : <span>Free</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
