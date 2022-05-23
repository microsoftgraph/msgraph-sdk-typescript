import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl} from './index';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleInstanceCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleEligibilityScheduleInstanceCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
    /**
     * Instantiates a new UnifiedRoleEligibilityScheduleInstanceCollectionResponse and sets the default values.
     * @param unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined) {
        this.additionalData = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.additionalData ? unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleEligibilityScheduleInstanceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleEligibilityScheduleInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
