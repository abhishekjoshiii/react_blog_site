import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
});

const Form = ({ updatePost, setUpdatePost, handleUpdate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        handleUpdate();
    };

    return (
        <form className='border p-5 ' onSubmit={handleSubmit(onSubmit)}>
            <h2>Update your Blog  </h2>
            <div className="mb-3">
                <label htmlFor="createTitle" className="form-label">Title</label>
                <input name="title" {...register('title')} placeholder='Enter Title' type="text" className="form-control" id="createTitle" value={updatePost.title} onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })} />
                {errors.title && <p>Title is required</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="createBody" className="form-label">Content</label>
                <textarea name="content"  {...register('content')} placeholder='Enter your content here..' className="form-control" id="createBody" rows="3" value={updatePost.body} onChange={(e) => setUpdatePost({ ...updatePost, body: e.target.value })}></textarea>
                {errors.content && <p>Content is required</p>}
                <button type='submit' className="btn btn-primary mt-1">Update</button>
            </div>
        </form>
    );
};

export default Form;