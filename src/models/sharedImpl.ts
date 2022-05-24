import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {Shared} from './shared';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedImpl implements AdditionalDataHolder, Parsable, Shared {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identity of the owner of the shared item. Read-only. */
    public owner?: IdentitySet | undefined;
    /** Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only. */
    public scope?: string | undefined;
    /** The identity of the user who shared the item. Read-only. */
    public sharedBy?: IdentitySet | undefined;
    /** The UTC date and time when the item was shared. Read-only. */
    public sharedDateTime?: Date | undefined;
    /**
     * Instantiates a new shared and sets the default values.
     * @param sharedParameterValue 
     */
    public constructor(sharedParameterValue?: Shared | undefined) {
        this.additionalData = sharedParameterValue?.additionalData ? sharedParameterValue?.additionalData! : {}
        this.owner = sharedParameterValue?.owner ;
        this.scope = sharedParameterValue?.scope ;
        this.sharedBy = sharedParameterValue?.sharedBy ;
        this.sharedDateTime = sharedParameterValue?.sharedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "owner": n => { this.owner = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getStringValue(); },
            "sharedBy": n => { this.sharedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sharedDateTime": n => { this.sharedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.owner){
        writer.writeObjectValue<IdentitySetImpl>("owner", new IdentitySetImpl(this.owner));
        }
        if(this.scope){
        writer.writeStringValue("scope", this.scope);
        }
        if(this.sharedBy){
        writer.writeObjectValue<IdentitySetImpl>("sharedBy", new IdentitySetImpl(this.sharedBy));
        }
        if(this.sharedDateTime){
        writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
