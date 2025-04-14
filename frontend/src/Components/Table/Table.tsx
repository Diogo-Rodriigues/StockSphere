import React from "react";

type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any, rowIndex: number) => {
    return (
      <tr key={company.cik} className="border-b border-white/10 hover:bg-indigo-600/20 transition-colors duration-300">
        {config.map((val: any, colIndex: number) => {
          return (
            <td key={`${rowIndex}-${colIndex}`} className="p-3 text-white/90">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  
  const renderedHeaders = config.map((config: any, index: number) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider"
        key={`header-${index}`}
      >
        {config.label}
      </th>
    );
  });
  
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-4 sm:p-6 xl:p-8 transition-all duration-300 hover:shadow-indigo-500/20">
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-indigo-900/50">{renderedHeaders}</thead>
          <tbody className="divide-y divide-white/10 bg-transparent">{renderedRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
