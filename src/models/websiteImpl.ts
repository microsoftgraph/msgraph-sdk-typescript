import {Website} from './website';
import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebsiteImpl implements AdditionalDataHolder, Parsable, Website {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The URL of the website. */
    public address?: string | undefined;
    /** The display name of the web site. */
    public displayName?: string | undefined;
    /** Possible values are: other, home, work, blog, profile. */
    public type?: WebsiteType | undefined;
    /**
     * Instantiates a new website and sets the default values.
     * @param websiteParameterValue 
     */
    public constructor(websiteParameterValue?: Website | undefined) {
        this.additionalData = websiteParameterValue?.additionalData ? websiteParameterValue?.additionalData! : {}
        this.address = websiteParameterValue?.address ;
        this.displayName = websiteParameterValue?.displayName ;
        this.type = websiteParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<WebsiteType>(WebsiteType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
        writer.writeStringValue("address", this.address);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.type){
        writer.writeEnumValue<WebsiteType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
