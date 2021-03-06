import React from "react";
import PropTypes from "prop-types";
import Tour from "reactour";
import { Button } from "semantic-ui-react";

import { secondary } from "../../../config/colors";
import showTutorial from "../../../config/tutorials";

function Walkthrough(props) {
  const {
    tourActive, closeTour, userTutorials,
  } = props;

  const isActive = (type) => {
    return showTutorial(type, userTutorials);
  };

  return (
    <>
      {tourActive && (
        <Tour
          accentColor={secondary}
          steps={steps[tourActive]}
          isOpen={isActive(tourActive)}
          onRequestClose={closeTour}
          closeWithMask={false}
        />
      )}
    </>
  );
}

const steps = {
  addchart: [
    {
      selector: ".chart-name-tut",
      content: () => (
        <p>{"You can change the summary of the chart at any time by clicking on the text."}</p>
      ),
    },
    {
      selector: ".chart-actions-tut",
      content: () => (
        <>
          <p>{"The chart saves automatically and the button will be green when everything is synced."}</p>
          <p>{" You have the option to manually save from here and to change the draft status of the chart at any time."}</p>
        </>
      ),
    },
    {
      selector: ".chart-type-tut",
      content: () => (
        <>
          <p>{"When you know how you'd like the chart to look like, you can choose a chart type from here."}</p>
          <p>{"You can always query for some data first and choose a type later. And speaking about queries..."}</p>
        </>
      ),
    },
    {
      selector: ".add-dataset-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"Here is the place where you prepare the data for brewing. You can create different datasets, connect them to data sources and get the data flowing."}</p>
          <p>{"You will need at least one dataset to generate a chart. Create one now and get acquainted with how it works 👩‍💻"}</p>
          <Button
            content="Brewing time!"
            icon="flask"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    },
  ],
  dataset: [
    {
      selector: ".dataset-manage-tut",
      content: () => (
        <>
          <p>{"Here you can change your dataset name at any time. The name will appear in the chart legend as well."}</p>
          <p>{"Most importantly, you can select which connection should the dataset get the data from by using the dropdown field."}</p>
          <p>{"You can always create new connections by clicking the 'Manage connections' button."}</p>
        </>
      ),
    },
    {
      selector: ".dataset-colors-tut",
      content: () => (
        <>
          <p>{"After you get some data, it will be time to give your chart some color"}</p>
          <p>{"You can choose any color for your dataset, including the line and fill color."}</p>
        </>
      ),
    },
    {
      selector: ".dataset-actions-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"The dataset settings are saved automatically, but you can always save manually from here."}</p>
          <p>{"If you no longer need one of the datasets, the delete button is also here for you."}</p>
          <Button
            content="Time to connect"
            icon="plug"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    }
  ],
  apibuilder: [
    {
      selector: ".apibuilder-route-tut",
      content: () => (
        <>
          <p>{"The host address was already set when you created the connection."}</p>
          <p>{"Here, you will have to enter the route and query parameters that you need for your API request."}</p>
        </>
      ),
    },
    {
      selector: ".apibuilder-menu-tut",
      content: () => (
        <>
          <p>{"You can further configure your requests by adding headers, a body of data and you can also paginate requests if the API allows it."}</p>
        </>
      ),
    },
    {
      selector: ".apibuilder-headers-tut",
      content: () => (
        <>
          <p>{"The global headers are enabled by default. These are set in the Connections page and it's best used for headers that need to be included often, such as the 'Authorization' header."}</p>
        </>
      ),
    },
    {
      selector: ".apibuilder-type-tut",
      content: () => (
        <>
          <p>{"You can select what type of API request you want to send from here."}</p>
        </>
      ),
    },
    {
      selector: ".apibuilder-request-tut",
      content: () => (
        <>
          <p>{"Once you have everything ready, send the request away and get the data."}</p>
        </>
      ),
    },
    {
      selector: ".apibuilder-result-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"If the request is successful you will see the JSON data in this section."}</p>
          <p>{"If the API supports it, you will also get the error message here in case the request is not successful. On the right, you will also see the HTTP error code in red."}</p>
          <Button
            content="Start configuring"
            icon="cog"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    },
  ],
  mongobuilder: [
    {
      selector: ".mongobuilder-query-tut",
      content: () => (
        <>
          <p>
            {"Here you can enter your MongoDB query to get data from your database. You can have a look at "}
            <a
              href="https://docs.mongodb.com/manual/tutorial/query-documents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"MongoDB's documentation on how to query documents."}
            </a>
          </p>
          <p>
            {"Note that you should always start the query with: "}
            <pre>connection.collection...</pre>
          </p>
        </>
      ),
    },
    {
      selector: ".mongobuilder-buttons-tut",
      content: () => (
        <>
          <p>{"Once you write the query, you can run it from here."}</p>
          <p>{"To make things easier later on you can also save the query and use it for other charts."}</p>
        </>
      ),
    },
    {
      selector: ".mongobuilder-saved-tut",
      content: () => (
        <>
          <p>{"Once you save some queries they will appear in this section. You can update and delete them from here as well."}</p>
        </>
      ),
    },
    {
      selector: ".mongobuilder-result-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"The JSON-formatted data will appear here when you run a successful query."}</p>
          <Button
            content="Write a query"
            icon="pencil"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    },
  ],
  sqlbuilder: [
    {
      selector: ".sqlbuilder-query-tut",
      content: () => (
        <>
          <p>
            {"Here you can enter your SQL query to get data from your database."}
          </p>
          <p>
            {"As an example, it should look like this: "}
            <pre>{"SELECT * from users WHERE age > 43;"}</pre>
          </p>
        </>
      ),
    },
    {
      selector: ".sqlbuilder-buttons-tut",
      content: () => (
        <>
          <p>{"Once you write the query, you can run it from here."}</p>
          <p>{"To make things easier later on you can also save the query and use it for other charts."}</p>
        </>
      ),
    },
    {
      selector: ".sqlbuilder-saved-tut",
      content: () => (
        <>
          <p>{"Once you save some queries they will appear in this section. You can update and delete them from here as well."}</p>
        </>
      ),
    },
    {
      selector: ".sqlbuilder-result-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"The JSON-formatted data will appear here when you run a successful query."}</p>
          <Button
            content="Write a query"
            icon="pencil"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    },
  ],
  objectexplorer: [
    {
      selector: ".objectexplorer-data-tut",
      content: () => (
        <>
          <p>{"Here you can see the data you just received from your connection."}</p>
          <p>{"The main goal here is to identify the key field you want to use for the visualisation."}</p>
          <p>{"For example, if you want to see the user signups, you'd look for a 'createdAt' field with the date the user was created."}</p>
        </>
      ),
    },
    {
      selector: ".objectexplorer-object-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"Once you identified your field, you can select it using the buttons below."}</p>
          <p>{"Alternatively, you can write it manually in the input field, but make sure you use the right syntax. Click on a few fields to get accustomed to how it works."}</p>
          <Button
            content="Select a field"
            icon="checkmark"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      )
    }
  ],
  requestmodal: [
    {
      selector: ".requestmodal-fields-tut",
      content: ({ close }) => ( // eslint-disable-line
        <>
          <p>{"Great! You have some data now."}</p>
          <p>{"Next, you will have to select a field that you want to visualise on your chart. You can switch to the fields explorer from here."}</p>
          <Button
            content="Gotcha"
            icon="checkmark"
            labelPosition="right"
            positive
            onClick={close}
          />
        </>
      ),
    },
  ]
};

Walkthrough.defaultProps = {
  userTutorials: {},
};

Walkthrough.propTypes = {
  tourActive: PropTypes.string.isRequired,
  closeTour: PropTypes.func.isRequired,
  userTutorials: PropTypes.object,
};

export default Walkthrough;
