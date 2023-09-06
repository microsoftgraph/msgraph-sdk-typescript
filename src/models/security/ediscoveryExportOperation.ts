import { type CaseOperation } from './caseOperation';
import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type ExportFileMetadata } from './exportFileMetadata';
import { ExportFileStructure } from './exportFileStructure';
import { ExportOptions } from './exportOptions';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoveryExportOperation extends CaseOperation, Parsable {
    /**
     * The description provided for the export.
     */
    description?: string | undefined;
    /**
     * The exportFileMetadata property
     */
    exportFileMetadata?: ExportFileMetadata[] | undefined;
    /**
     * The options provided for the export. For more details, see reviewSet: export. Possible values are: originalFiles, text, pdfReplacement,  tags.
     */
    exportOptions?: ExportOptions[] | undefined;
    /**
     * The options provided that specify the structure of the export. For more details, see reviewSet: export. Possible values are: none, directory, pst.
     */
    exportStructure?: ExportFileStructure | undefined;
    /**
     * The name provided for the export.
     */
    outputName?: string | undefined;
    /**
     * Review set from where documents are exported.
     */
    reviewSet?: EdiscoveryReviewSet | undefined;
    /**
     * The review set query which is used to filter the documents for export.
     */
    reviewSetQuery?: EdiscoveryReviewSetQuery | undefined;
}
