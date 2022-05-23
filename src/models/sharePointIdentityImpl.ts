import {IdentityImpl} from './index';
import {SharePointIdentity} from './sharePointIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class SharePointIdentityImpl extends IdentityImpl implements Parsable, SharePointIdentity {
    /** The sign in name of the SharePoint identity. */
    public loginName?: string | undefined;
    /**
     * Instantiates a new sharePointIdentity and sets the default values.
     * @param sharePointIdentityParameterValue 
     */
    public constructor(sharePointIdentityParameterValue?: SharePointIdentity | undefined) {
        super();
        this.loginName = sharePointIdentityParameterValue?.loginName ;
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
    };
}
