import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import img1 from '../images/1.gif'
import img2 from '../images/2.gif'
import img3 from '../images/3.gif'
import img4 from '../images/4.gif'

const Content = styled.div`

`



const Budget = () => {
  return (
    <Container>
      <Content>
        <Row>
          <h1>Please choose your budget goal</h1>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="d-center">
            <Card className="card-wrapper ">
              <Card.Img variant="top" src={img1} className="card-img"/>
              <Card.Body>
                <Card.Title className="card-title">Line-item budget</Card.Title>
                <Card.Text className="card-text">
                  Line-item budgets are most commonly associated with a typical budget or budgeting process.

                  To get started, you’ll list each of your expenses. Or, even better, categories of expenses. This will be for a specific timeframe, like a month.

                  From there, you’ll want to identify a target spending amount for each line item or category in your budget. “Ideally, you will do this based on reviewing your prior spending in such categories,” explains Taylor. If you’re developing a new line-item budget, a good place to start would be by reviewing your last three months’ worth of spending and assigning each transaction a category.

                  While you can use this type of budget for your personal finances, it’s usually used by businesses in order to conduct a year-to-year analysis or comparison of spending in expense categories. This method also makes it easier to track both income and expenses.
                  The level of detail involved, however, can be a downside for some due to the need to set up and maintain it.
                </Card.Text >
                <Button variant="primary">lets go!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-center">
            <Card className="card-wrapper">
              <Card.Img variant="top" src={img2} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">The 50/30/20 budget</Card.Title>
                <Card.Text className="card-text">
                  Here’s how it works, just divide your income into the following categories;

                  50% goes to necessities
                  30% to wants
                  20% to savings and debt repayment
                  What I also like about this type of budget? It’s flexible enough that you can use other variations to better suit your needs and goals.

                  For a stripped-down version try the 80/20 rule. Here 80% of your income goes to essentials and luxuries, while the remaining 20% is set aside for savings.
                  Are you an ambitious saver? The 60/30/10 rule might be a better option. With this type 60% of your take-home pay goes towards savings, investing, or paying off debt. You’ll spend 30% on your needs and the remaining 10% on discretionary spending.
                  If you attempting to save for your retirementand your child’s education try the 50/15/5 rule. Withthis model you would allocate 50% of your income to essential expenses, 15% to retirement savings, and 5% to an emergency fund. What about the 30% that remains? You can use that to beef up your retirement, your child’s tuition, or go on vacation.
                  There’s also the 30-30-30-10 budget. Here 30% of your monthly income will be evenly split across housing, necessities, and financial goals? The remaining 10% will budget for vices like entertainment, dining out, and vacations.
                </Card.Text >
                <Button variant="primary">lets go!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center pt-5">
          <Col md={4} className="d-center">
            <Card className="card-wrapper">
              <Card.Img variant="top" src={img3} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">The zero based budget</Card.Title>
                <Card.Text className="card-text">
                  Want to make the most of every dollar you earn? You might want to create a zero-based budget.

                  “Zero-based budgeting is a way of budgeting where your income minus your expenses equals zero,” clarifies Ramsey Solutions. In a zero-based budget, you must ensure that your income matches your expenses each month. That way you’re giving every dollar that’s coming in a job to do.

                  That doesn’t mean that your bank account is empty. It simply means that your income minus your expenses equal zero, they explain.

                  Let’s say you make $3,000 each month. All your spending, saving, giving, and investing should total $3,000. “That way you knowexactly where every one of your hard-earned dollars is going,” they add. After all, if you do not know exactly where your money is going, you could face a financial disaster.
                </Card.Text >
                <Button variant="primary">lets go!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-center">
            <Card className="card-wrapper">
              <Card.Img variant="top" src={img4} className="card-img"/>
              <Card.Body>
                <Card.Title className="card-title">Hybrid Budget</Card.Title>
                <Card.Text className="card-text">
                  Do you like parts of each budget listed above, but not the entire kit and caboodle? That’s perfectly acceptable, says Evan Gorenflo, a financial advice expert with the banking, saving, and investment app Albert. Why? Because you can take the elements that you do like and combine there with others to create your own personalized hybrid budget,

                  “For example, you could start with a 50/20/30 plan, where the goal is to save 20 percent of your income,” says Gorenflo. But, you could also establish a detailed category of spending and use cash envelopes for these different types of spending.

                  “Ultimately, the most important thing to remember is that creating a budget is a very personal thing,” states Taylor. “There is no one right way for everyone to budget. Identify an approach that works for you, your goals, and your personality type.”
                </Card.Text >
                <Button variant="primary">lets go!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>

        </Row>
        <Row>

        </Row>
      </Content>
    </Container>
  )
}

export default Budget