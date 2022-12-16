import Head from "next/head";
import Navbar from "src/components/organisms/Navbar";
import Sidebar from "src/components/organisms/Sidebar";

type Customer = {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
};

const data: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    location: "Berlin",
    phone: "+49 123 456 789",
    email: "",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MaterData</title>
        <meta name="description" content="MaterData" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Sidebar />

        <section className="flex-1 p-6">
          <h1>Customers</h1>

          <div className="bg-white flex">
            <div>filters</div>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>E-mail</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div>Showing 10 of 14.381 results</div>
              <div>pagination</div>
              <div>
                Items per page
                <select>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
