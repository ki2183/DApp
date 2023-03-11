import './JoinMembership.css';

function Join() {
    const month = [];
    const city=[];
    const Do=['서울','부산','대구','인천','광주','대전','울산','경기도','경상도','충청도','전라도','강원도','제주도'];
    for(let i=1; i<=12; i++) 
        month.push(<option value={i}>{i}</option>);
    Do.forEach(e => {
        city.push(
            <option value={e}>{e}</option>
        );
    });
  return (
    <div className="container-join">
        <div>
            <form className='join-case'>
                <div>
                    <p>아이디</p>
                    <input type='text' placeholder='아이디'></input>
                </div>
                <div>
                    <p>비밀번호</p>
                    <input type='password' placeholder='비밀번호'></input>
                </div>
                <div>
                    <p>비밀번호 재확인</p>
                    <input type='password' placeholder='비밀번호 재확인'></input>
                </div>
                <div>
                    <p>이름</p>
                    <input type='text' placeholder='이름'></input>
                </div>
                <div id='personId-join'>
                    <p>생년월일</p>
                    <input type='text' placeholder='년(4자)'></input>
                    <select id="mm" class="sel" aria-label="월">
					    <option value="">월</option>
                        {month}
                    </select>
                    <input type='text' placeholder='일'></input>
                    
                </div>
                <div>
                    <p>휴대전화</p>
                    <input type='text' placeholder='전화번호'></input>
                </div>
                <div id='post-join'>
                    <p>주소</p> 
                    <div>
                        <select id="pp" class="" aria-label="도">
                            <option value="">도</option>
                            {city}
                        </select>
                        <input type='text' placeholder='주소'></input>
                        <input type="text" placeholder='우편번호'></input>
                    </div>
                </div>
                <input type="submit"value='가입하기'></input>
            </form>
      </div>
      <div id='last'></div>
    </div>
  );
}

export default Join;
