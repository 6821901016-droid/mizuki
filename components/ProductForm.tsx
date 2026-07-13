"ues client"


export default function CategoryForm() {
    return (
        <div>
            <h1>Category Form</h1>
            <form>
                <input name="name" placeholder="=ชื่อสินค้า" />
                <input name="name" category ="=ชื่อสินค้า" />
                <textarea name="description" placeholder="รายละเอียดสินค้า"></textarea>
                <input name="price" placeholder="=ราคา" />
                <input name="stock" placeholder="=ของในคลัง" />
            </form>
        </div>
    );
}category