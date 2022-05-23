import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from './createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignmentCollectionResponse} from './identityUserFlowAttributeAssignmentCollectionResponse';
import {IdentityUserFlowAttributeAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlowAttributeAssignmentCollectionResponseImpl implements AdditionalDataHolder, IdentityUserFlowAttributeAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IdentityUserFlowAttributeAssignment[] | undefined;
    /**
     * Instantiates a new IdentityUserFlowAttributeAssignmentCollectionResponse and sets the default values.
     * @param identityUserFlowAttributeAssignmentCollectionResponseParameterValue 
     */
    public constructor(identityUserFlowAttributeAssignmentCollectionResponseParameterValue?: IdentityUserFlowAttributeAssignmentCollectionResponse | undefined) {
        this.additionalData = identityUserFlowAttributeAssignmentCollectionResponseParameterValue?.additionalData ? identityUserFlowAttributeAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityUserFlowAttributeAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = identityUserFlowAttributeAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignmentImpl>(createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityUserFlowAttributeAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityUserFlowAttributeAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
