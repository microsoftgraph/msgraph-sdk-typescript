import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleAssignmentScheduleInstanceImpl} from './index';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './unifiedRoleAssignmentScheduleInstanceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleInstanceCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleAssignmentScheduleInstanceCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleInstanceCollectionResponse and sets the default values.
     * @param unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue?: UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined) {
        this.additionalData = unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue?.additionalData ? unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleAssignmentScheduleInstanceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleAssignmentScheduleInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
