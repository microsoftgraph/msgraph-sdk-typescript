import {IdentityImpl} from './index';
import {SharePointIdentity} from './sharePointIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentityImpl extends IdentityImpl implements SharePointIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The sign in name of the SharePoint identity. */
    public loginName?: string | undefined;
    /**
     * Instantiates a new SharePointIdentity and sets the default values.
     * @param sharePointIdentityParameterValue 
     */
    public constructor(sharePointIdentityParameterValue?: SharePointIdentity | undefined) {
        super(sharePointIdentityParameterValue);
        this.additionalData = sharePointIdentityParameterValue?.additionalData ? sharePointIdentityParameterValue?.additionalData! : {};
        this.loginName = sharePointIdentityParameterValue?.loginName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "loginName": n => { this.loginName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.loginName){
            writer.writeStringValue("loginName", this.loginName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
