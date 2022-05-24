import {DriveItemImpl} from '../../models/';
import {createDriveItemFromDiscriminatorValue} from '../../models/createDriveItemFromDiscriminatorValue';
import {DriveItem} from '../../models/driveItem';
import {SharedWithMeResponse} from './sharedWithMeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sharedWithMe method. */
export class SharedWithMeResponseImpl implements AdditionalDataHolder, Parsable, SharedWithMeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: DriveItem[] | undefined;
    /**
     * Instantiates a new sharedWithMeResponse and sets the default values.
     * @param sharedWithMeResponseParameterValue 
     */
    public constructor(sharedWithMeResponseParameterValue?: SharedWithMeResponse | undefined) {
        this.additionalData = sharedWithMeResponseParameterValue?.additionalData ? sharedWithMeResponseParameterValue?.additionalData! : {}
        this.value = sharedWithMeResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DriveItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
