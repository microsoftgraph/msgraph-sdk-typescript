import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageAttachment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive.
     */
    content?: string | undefined;
    /**
     * The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header.
     */
    contentType?: string | undefined;
    /**
     * URL for the content of the attachment. Supported protocols: http, https, file and data.
     */
    contentUrl?: string | undefined;
    /**
     * Read-only. Unique id of the attachment.
     */
    id?: string | undefined;
    /**
     * Name of the attachment.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ID of the Teams app that is associated with the attachment. The property is specifically used to attribute a Teams message card to the specified app.
     */
    teamsAppId?: string | undefined;
    /**
     * URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document.
     */
    thumbnailUrl?: string | undefined;
}
