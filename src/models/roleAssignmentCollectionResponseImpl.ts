import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {RoleAssignmentImpl} from './index';
import {RoleAssignment} from './roleAssignment';
import {RoleAssignmentCollectionResponse} from './roleAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleAssignmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, RoleAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: RoleAssignment[] | undefined;
    /**
     * Instantiates a new RoleAssignmentCollectionResponse and sets the default values.
     * @param roleAssignmentCollectionResponseParameterValue 
     */
    public constructor(roleAssignmentCollectionResponseParameterValue?: RoleAssignmentCollectionResponse | undefined) {
        this.additionalData = roleAssignmentCollectionResponseParameterValue?.additionalData ? roleAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = roleAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = roleAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RoleAssignmentImpl>(createRoleAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: RoleAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<RoleAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
