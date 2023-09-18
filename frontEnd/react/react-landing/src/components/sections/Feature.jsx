import SingleFeatures from "../SingleFeatures";

const Feature = () => {
    return (
        <section
            id='features'
            className='bg-gray-50 dark:bg-gray-900 -mt-1 pt-32'
        >
            <div className='container'>
                <div className='flex flex-col md:flex-row gap-8 flex-wrap'>
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                    <SingleFeatures
                        css={"flex-grow basis-1/2 md:basis-1/3 lg:basis-1/4"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Feature;
