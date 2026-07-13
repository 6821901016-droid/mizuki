"ues client"


export default function CategoryForm() {
    return (
        <div>
            <h1>Category Form</h1>
            <form>
                <input name="name" placeholder="ประเภทสินค้า" />
                <textarea name="description" placeholder="รายละเอียดสินค้า"></textarea>
            </form>
        </div>
    );
}