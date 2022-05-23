import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentityImpl} from './index';
import {SharingLink} from './sharingLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingLinkImpl implements AdditionalDataHolder, Parsable, SharingLink {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The app the link is associated with. */
    public application?: Identity | undefined;
    /** If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint. */
    public preventsDownload?: boolean | undefined;
    /** The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant. */
    public scope?: string | undefined;
    /** The type of the link created. */
    public type?: string | undefined;
    /** For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage. */
    public webHtml?: string | undefined;
    /** A URL that opens the item in the browser on the OneDrive website. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new sharingLink and sets the default values.
     * @param sharingLinkParameterValue 
     */
    public constructor(sharingLinkParameterValue?: SharingLink | undefined) {
        this.additionalData = sharingLinkParameterValue?.additionalData ? sharingLinkParameterValue?.additionalData! : {}
        this.application = sharingLinkParameterValue?.application ;
        this.preventsDownload = sharingLinkParameterValue?.preventsDownload ;
        this.scope = sharingLinkParameterValue?.scope ;
        this.type = sharingLinkParameterValue?.type ;
        this.webHtml = sharingLinkParameterValue?.webHtml ;
        this.webUrl = sharingLinkParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "preventsDownload": n => { this.preventsDownload = n.getBooleanValue(); },
            "scope": n => { this.scope = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "webHtml": n => { this.webHtml = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.application){
        writer.writeObjectValue<IdentityImpl>("application", new IdentityImpl(this.application));
        }
        if(this.preventsDownload){
        writer.writeBooleanValue("preventsDownload", this.preventsDownload);
        }
        if(this.scope){
        writer.writeStringValue("scope", this.scope);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        if(this.webHtml){
        writer.writeStringValue("webHtml", this.webHtml);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
