import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createSharePointIdentityFromDiscriminatorValue} from './createSharePointIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentityImpl, IdentitySetImpl, SharePointIdentityImpl} from './index';
import {SharePointIdentity} from './sharePointIdentity';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentitySetImpl extends IdentitySetImpl implements SharePointIdentitySet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The group associated with this action. Optional. */
    public group?: Identity | undefined;
    /** The SharePoint group associated with this action. Optional. */
    public siteGroup?: SharePointIdentity | undefined;
    /** The SharePoint user associated with this action. Optional. */
    public siteUser?: SharePointIdentity | undefined;
    /**
     * Instantiates a new SharePointIdentitySet and sets the default values.
     * @param sharePointIdentitySetParameterValue 
     */
    public constructor(sharePointIdentitySetParameterValue?: SharePointIdentitySet | undefined) {
        super(sharePointIdentitySetParameterValue);
        this.additionalData = sharePointIdentitySetParameterValue?.additionalData ? sharePointIdentitySetParameterValue?.additionalData! : {};
        this.group = sharePointIdentitySetParameterValue?.group instanceof IdentityImpl? sharePointIdentitySetParameterValue?.group:new IdentityImpl(sharePointIdentitySetParameterValue?.group);
        this.siteGroup = sharePointIdentitySetParameterValue?.siteGroup instanceof SharePointIdentityImpl? sharePointIdentitySetParameterValue?.siteGroup:new SharePointIdentityImpl(sharePointIdentitySetParameterValue?.siteGroup);
        this.siteUser = sharePointIdentitySetParameterValue?.siteUser instanceof SharePointIdentityImpl? sharePointIdentitySetParameterValue?.siteUser:new SharePointIdentityImpl(sharePointIdentitySetParameterValue?.siteUser);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "group": n => { this.group = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "siteGroup": n => { this.siteGroup = n.getObjectValue<SharePointIdentityImpl>(createSharePointIdentityFromDiscriminatorValue); },
            "siteUser": n => { this.siteUser = n.getObjectValue<SharePointIdentityImpl>(createSharePointIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.group){
            writer.writeObjectValue<IdentityImpl>("group", new IdentityImpl(this.group));
        }
        if(this.siteGroup){
            writer.writeObjectValue<SharePointIdentityImpl>("siteGroup", new SharePointIdentityImpl(this.siteGroup));
        }
        if(this.siteUser){
            writer.writeObjectValue<SharePointIdentityImpl>("siteUser", new SharePointIdentityImpl(this.siteUser));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
