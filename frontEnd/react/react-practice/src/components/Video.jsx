const Video = ({ title, des, views }) => {
    const img = `https://picsum.photos/id/900/1800/500`;
    return (
        <div className='flex flex-col basis-96 flex-grow'>
            <img src={img} alt='' className='block m-4 mb-0' />
            <div className='m-4 mt-0 p-4 bg-gray-800'>
                <h1 className='text-3xl capitalize font-bold pb-2 text-gray-300'>{title}</h1>
                <p>
                    {des} . {views}
                </p>
            </div>
        </div>
    );
};

export default Video;
