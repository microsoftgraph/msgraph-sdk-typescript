import {DriveItemImpl} from '../../../../../../../models/';
import {createDriveItemFromDiscriminatorValue} from '../../../../../../../models/createDriveItemFromDiscriminatorValue';
import {DriveItem} from '../../../../../../../models/driveItem';
import {SearchWithQResponse} from './searchWithQResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the search method. */
export class SearchWithQResponseImpl implements SearchWithQResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: DriveItem[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new searchWithQResponse and sets the default values.
     * @param searchWithQResponseParameterValue 
     */
    public constructor(searchWithQResponseParameterValue?: SearchWithQResponse | undefined) {
        this._additionalData = searchWithQResponseParameterValue?.additionalData ? searchWithQResponseParameterValue?.additionalData! : {};
        this._value = searchWithQResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: DriveItemImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DriveItemInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DriveItem[] | undefined) {
        if(value) {
            const valueArrValue: DriveItemImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
