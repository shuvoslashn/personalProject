const Video = ({ title, des, views, channel, verified, id }) => {
    const img = `https://picsum.photos/id/6${id}/1800/800`;
    return (
        <div className='flex flex-col basis-1/4 flex-grow'>
            <img src={img} alt='' className='block m-4 mb-0' />
            <div className='m-4 mt-0 p-8 bg-gray-800'>
                <h1 className='text-2xl capitalize font-bold pb-2 text-gray-300'>{title}</h1>
                <div className='flex justify-between'>
                    <p className='text-xl font-bold text-gray-400'>
                        {channel}
                        <span className='ml-2'>{verified ? <i className='ri-shield-check-fill' /> : null}</span>
                    </p>
                    <p className='text-xl'>
                        {des} . {views}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Video;
