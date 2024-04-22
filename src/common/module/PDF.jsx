// components/PDFViewer.js

import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div className=''>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
