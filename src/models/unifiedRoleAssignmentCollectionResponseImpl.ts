import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {UnifiedRoleAssignmentImpl} from './index';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleAssignmentCollectionResponse} from './unifiedRoleAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleAssignment[] | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentCollectionResponse and sets the default values.
     * @param unifiedRoleAssignmentCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleAssignmentCollectionResponseParameterValue?: UnifiedRoleAssignmentCollectionResponse | undefined) {
        this.additionalData = unifiedRoleAssignmentCollectionResponseParameterValue?.additionalData ? unifiedRoleAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentImpl>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
