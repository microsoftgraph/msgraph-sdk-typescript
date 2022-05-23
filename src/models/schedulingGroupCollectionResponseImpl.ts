import {createSchedulingGroupFromDiscriminatorValue} from './createSchedulingGroupFromDiscriminatorValue';
import {SchedulingGroupImpl} from './index';
import {SchedulingGroup} from './schedulingGroup';
import {SchedulingGroupCollectionResponse} from './schedulingGroupCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SchedulingGroupCollectionResponseImpl implements AdditionalDataHolder, Parsable, SchedulingGroupCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SchedulingGroup[] | undefined;
    /**
     * Instantiates a new SchedulingGroupCollectionResponse and sets the default values.
     * @param schedulingGroupCollectionResponseParameterValue 
     */
    public constructor(schedulingGroupCollectionResponseParameterValue?: SchedulingGroupCollectionResponse | undefined) {
        this.additionalData = schedulingGroupCollectionResponseParameterValue?.additionalData ? schedulingGroupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = schedulingGroupCollectionResponseParameterValue?.nextLink ;
        this.value = schedulingGroupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SchedulingGroupImpl>(createSchedulingGroupFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SchedulingGroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SchedulingGroupImpl(element));});
        writer.writeCollectionOfObjectValues<SchedulingGroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
