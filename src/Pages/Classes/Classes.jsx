import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useClass from "../../Hooks/useClass";
import ClassCard from "../../Component/ClassCard";

const Classes = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [classes] = useClass();
    const balgla = classes.filter(item => item.category === 'Bangla')
    const english = classes.filter(item => item.category === 'English')
    const math = classes.filter(item => item.category === 'Math')
    const ict = classes.filter(item => item.category === 'ICT')

    return (
        <div className="max-w-7xl mx-auto my-5">
            <Helmet>
                <title>EDUcate | Classes</title>
            </Helmet>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Bangle</Tab>
                    <Tab>English</Tab>
                    <Tab>Math</Tab>
                    <Tab>ICT</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                        {
                            balgla.map(item => <ClassCard
                                key={item._id}
                                item={item}
                            ></ClassCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                        {
                            english.map(item => <ClassCard
                                key={item._id}
                                item={item}
                            ></ClassCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                        {
                            math.map(item => <ClassCard
                                key={item._id}
                                item={item}
                            ></ClassCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                        {
                            ict.map(item => <ClassCard
                                key={item._id}
                                item={item}
                            ></ClassCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;