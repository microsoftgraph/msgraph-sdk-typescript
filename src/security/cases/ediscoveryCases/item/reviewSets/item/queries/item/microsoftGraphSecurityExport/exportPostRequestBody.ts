import {ExportFileStructure} from '../../../../../../../../../models/security/exportFileStructure';
import {ExportOptions} from '../../../../../../../../../models/security/exportOptions';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExportPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The exportOptions property
     */
    exportOptions?: ExportOptions | undefined;
    /**
     * The exportStructure property
     */
    exportStructure?: ExportFileStructure | undefined;
    /**
     * The outputName property
     */
    outputName?: string | undefined;
}
