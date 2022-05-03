import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionsHistory/transactions.json";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Container } from "./Container";
import { FriendList } from "./FriendList";
import { TransactionsHistory } from "./TransactionsHistory";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionsHistory item={transactions} />
    </Container>
  );
};
