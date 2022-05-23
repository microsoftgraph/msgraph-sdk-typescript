import {ColumnDefinition} from './columnDefinition';
import {ContentTypeInfo} from './contentTypeInfo';
import {DocumentSetContent} from './documentSetContent';

export interface DocumentSet{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Content types allowed in document set. */
    allowedContentTypes?:ContentTypeInfo[] | undefined;
    /** Default contents of document set. */
    defaultContents?:DocumentSetContent[] | undefined;
    /** Indicates whether to add the name of the document set to each file name. */
    propagateWelcomePageChanges?:boolean | undefined;
    /** The sharedColumns property */
    sharedColumns?:ColumnDefinition[] | undefined;
    /** Add the name of the Document Set to each file name. */
    shouldPrefixNameToFile?:boolean | undefined;
    /** The welcomePageColumns property */
    welcomePageColumns?:ColumnDefinition[] | undefined;
    /** Welcome page absolute URL. */
    welcomePageUrl?:string | undefined;
}
