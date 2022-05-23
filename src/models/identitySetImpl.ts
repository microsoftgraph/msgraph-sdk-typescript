import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {IdentityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySetImpl implements AdditionalDataHolder, IdentitySet, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Identity of the Application. This property is read-only. */
    public application?: Identity | undefined;
    /** The Identity of the Device. This property is read-only. */
    public device?: Identity | undefined;
    /** The Identity of the User. This property is read-only. */
    public user?: Identity | undefined;
    /**
     * Instantiates a new identitySet and sets the default values.
     * @param identitySetParameterValue 
     */
    public constructor(identitySetParameterValue?: IdentitySet | undefined) {
        this.additionalData = identitySetParameterValue?.additionalData ? identitySetParameterValue?.additionalData! : {}
        this.application = identitySetParameterValue?.application ;
        this.device = identitySetParameterValue?.device ;
        this.user = identitySetParameterValue?.user ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "device": n => { this.device = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "user": n => { this.user = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
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
        if(this.device){
        writer.writeObjectValue<IdentityImpl>("device", new IdentityImpl(this.device));
        }
        if(this.user){
        writer.writeObjectValue<IdentityImpl>("user", new IdentityImpl(this.user));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
