import {SubjectSetImpl} from './index';
import {SingleServicePrincipal} from './singleServicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SingleServicePrincipalImpl extends SubjectSetImpl implements SingleServicePrincipal {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Description of this service principal. */
    public description?: string | undefined;
    /** ID of the servicePrincipal. */
    public servicePrincipalId?: string | undefined;
    /**
     * Instantiates a new SingleServicePrincipal and sets the default values.
     * @param singleServicePrincipalParameterValue 
     */
    public constructor(singleServicePrincipalParameterValue?: SingleServicePrincipal | undefined) {
        super(singleServicePrincipalParameterValue);
        this.additionalData = singleServicePrincipalParameterValue?.additionalData ? singleServicePrincipalParameterValue?.additionalData! : {};
        this.description = singleServicePrincipalParameterValue?.description;
        this.servicePrincipalId = singleServicePrincipalParameterValue?.servicePrincipalId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "servicePrincipalId": n => { this.servicePrincipalId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.servicePrincipalId){
            writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
