import {AttachmentType} from './attachmentType';

export interface AttachmentItem{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The type of attachment. Possible values are: file, item, reference. Required. */
    attachmentType?:AttachmentType | undefined;
    /** The CID or Content-Id of the attachment for referencing in case of in-line attachments using <img src='cid:contentId'> tag in HTML messages. Optional. */
    contentId?:string | undefined;
    /** The nature of the data in the attachment. Optional. */
    contentType?:string | undefined;
    /** true if the attachment is an inline attachment; otherwise, false. Optional. */
    isInline?:boolean | undefined;
    /** The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required. */
    name?:string | undefined;
    /** The length of the attachment in bytes. Required. */
    size?:number | undefined;
}
