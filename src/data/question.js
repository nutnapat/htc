export const AnswerTypes = {
    A: 'บำเพ็ญ',
    B: 'สอน',
    C: 'สวัส',
    D: 'เรียน',
};

export const questions = [
    {
        questionText: 'คุณมักจะเป็นคนแบบไหน เมื่อคุณมีเวลาว่าง',
        answerOptions: [
            { answerText: 'ออกไปวิ่งที่สวนสาธารณะ', type: AnswerTypes.A },
            { answerText: 'ออกไปร้านหนังสือ หาความรู้เพิ่มเติม', type: AnswerTypes.B },
            { answerText: 'คิดค้นสูตรอาหาร ขนม', type: AnswerTypes.C },
            { answerText: 'ออกไปเที่ยวกับเพื่อน', type: AnswerTypes.D },
        ],
    },
    {
        questionText: 'หากคุณเลือกของได้เพียงหนึ่งชิ้น ที่สามารถนำติดตัวขึ้นไปบนค่ายอาสาได้ คุณจะเลือกของชิ้นใด',
        answerOptions: [
            { answerText: 'รองเท้าบูธ', type: AnswerTypes.A },
            { answerText: 'สมุดดินสอ', type: AnswerTypes.B },
            { answerText: 'แผนที่', type: AnswerTypes.D },
            { answerText: 'ข้าวสาร', type: AnswerTypes.C },
        ],
    },
    {
        questionText: 'คำใดที่นิยามความเป็นคุณได้ดีที่สุด',
        answerOptions: [
            { answerText: 'ใจดี', type: AnswerTypes.B },
            { answerText: 'ความคิดสร้างสรรค', type: AnswerTypes.C },
            { answerText: 'ความท้าทายและสิ่งใหม่ๆ', type: AnswerTypes.D },
            { answerText: 'มุ่งมั่นและลงมือทำ', type: AnswerTypes.A },
        ],
    },
    {
        questionText: 'คุณเป็นคนแบบไหนในกลุ่มเพื่อน',
        answerOptions: [
            { answerText: 'สายติวเตอร์ให้เพื่อนๆช่วงสอบ', type: AnswerTypes.B },
            { answerText: 'สายกูรูเรื่องของกิน', type: AnswerTypes.C },
            { answerText: 'สายปาร์ตี้', type: AnswerTypes.D },
            { answerText: 'สายสุขภาพ ชวนเข้ายิม', type: AnswerTypes.A },
        ],
    },
    {
        questionText: 'ถ้าคุณอยู่โครงสอน จะจัดกิจกรรมอะไรให้เด็กๆ',
        answerOptions: [
            { answerText: 'สอนทำบัวลอย', type: AnswerTypes.C },
            { answerText: 'เล่นเกมล่าสมบัติ', type: AnswerTypes.D },
            { answerText: 'สร้างเมืองจากดินน้ำมัน', type: AnswerTypes.A },
            { answerText: 'แนะนำอาชีพน้องๆ', type: AnswerTypes.B },
        ],
    },
    {
        questionText: 'ถ้าให้เลือกปลูกต้นไม้ได้หนึ่งต้น คุณเลือกจะปลูกต้นอะไร',
        answerOptions: [
            { answerText: 'ต้นสัก', type: AnswerTypes.A },
            { answerText: 'ปลูกข้าว', type: AnswerTypes.C },
            { answerText: 'ปลูกดอกไม้', type: AnswerTypes.B },
            { answerText: 'ฟ้าทะลายโจร', type: AnswerTypes.D },
        ],
    },
    {
        questionText: 'หากต้องแนะนำอาชีพให้น้องๆ คุณจะเลือกแนะนำอาชีพใดต่อไปนี้',
        answerOptions: [
            { answerText: 'วิศวกร', type: AnswerTypes.A },
            { answerText: 'เชฟ', type: AnswerTypes.C },
            { answerText: 'คุณครู', type: AnswerTypes.B },
            { answerText: 'มัคคุเทศก์', type: AnswerTypes.D },
        ],
    },
    {
        questionText: 'ถ้าคุณได้รับอาหาร 1 เมนู คุณคิดว่าเมนูนั้นคืออะไร',
        answerOptions: [
            { answerText: 'โจ๊กหมูสับ ใส่ไข่', type: AnswerTypes.B },
            { answerText: 'สเต๊กพอร์คชอป', type: AnswerTypes.A },
            { answerText: 'ส้มตำไก่ย่าง', type: AnswerTypes.D },
            { answerText: 'ต้มยำกุ้ง', type: AnswerTypes.C },
        ],
    },
    {
        questionText: 'หากคุณสามารถเลือกห้องนอนที่มองเห็นวิวนอกหน้าต่างได้ วิวที่คุณมองเห็นจะเป็นแบบใด',
        answerOptions: [
            { answerText: 'สวนผัก', type: AnswerTypes.C },
            { answerText: 'สนามหญ้า', type: AnswerTypes.B },
            { answerText: 'ลำธาร', type: AnswerTypes.D },
            { answerText: 'อาคารบ้านเรือน', type: AnswerTypes.A },
        ],
    },
    {
        questionText: 'คุณชอบอ่านหนังสือประเภทใด',
        answerOptions: [
            { answerText: 'หนังสือการ์ตูน ', type: AnswerTypes.B },
            { answerText: 'ไกด์บุ๊ค หนังสือท่องเที่ยว', type: AnswerTypes.D },
            { answerText: 'บ้านและสวน', type: AnswerTypes.A },
            { answerText: 'ตำรับอาหาร ', type: AnswerTypes.C },
        ],
    },
];