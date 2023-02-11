import cls from './Services.module.css';

const Services = () => {
    return (
        <section>
            <div className={ cls.container }>
                <div className={ `${cls.small} ${cls.right_marg}` }>
                    <img src={`/images/${'treatments'}.jpg`} alt='Service' />
                    <p>TREATMENTS</p>
                </div>
                <div className={ `${cls.big} ${cls.left_marg}` }>
                    <img src={`/images/${'thermal-bath'}.jpg`} alt='Service' />
                    <p>THERMAL BATH</p>
                </div>
            </div>
            <div className={ cls.container }>
                <div className={ `${cls.big} ${cls.right_marg}` }>
                    <img src={`/images/${'massages'}.jpg`} alt='Service' />
                    <p>MASSAGES</p>
                </div>
                <div className={ `${cls.small} ${cls.left_marg}` }>
                    <img src={`/images/${'aromatic-oils'}.jpg`} alt='Service' />
                    <p>AROMATIC OILS</p>
                </div>
            </div>
        </section>
    );
}
export default Services;