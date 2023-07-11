import {ColumnDefinition} from './columnDefinition';
import {ContentTypeInfo} from './contentTypeInfo';
import {DocumentSetContent} from './documentSetContent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Content types allowed in document set.
     */
    allowedContentTypes?: ContentTypeInfo[] | undefined;
    /**
     * Default contents of document set.
     */
    defaultContents?: DocumentSetContent[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies whether to push welcome page changes to inherited content types.
     */
    propagateWelcomePageChanges?: boolean | undefined;
    /**
     * The sharedColumns property
     */
    sharedColumns?: ColumnDefinition[] | undefined;
    /**
     * Indicates whether to add the name of the document set to each file name.
     */
    shouldPrefixNameToFile?: boolean | undefined;
    /**
     * The welcomePageColumns property
     */
    welcomePageColumns?: ColumnDefinition[] | undefined;
    /**
     * Welcome page absolute URL.
     */
    welcomePageUrl?: string | undefined;
}
