import {createMobileAppAssignmentFromDiscriminatorValue} from './createMobileAppAssignmentFromDiscriminatorValue';
import {MobileAppAssignmentImpl} from './index';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentCollectionResponse} from './mobileAppAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppAssignmentCollectionResponseImpl implements MobileAppAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: MobileAppAssignment[] | undefined;
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
     * Instantiates a new MobileAppAssignmentCollectionResponse and sets the default values.
     * @param mobileAppAssignmentCollectionResponseParameterValue 
     */
    public constructor(mobileAppAssignmentCollectionResponseParameterValue?: MobileAppAssignmentCollectionResponse | undefined) {
        this._additionalData = mobileAppAssignmentCollectionResponseParameterValue?.additionalData ? mobileAppAssignmentCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = mobileAppAssignmentCollectionResponseParameterValue?.nextLink;
        this._value = mobileAppAssignmentCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileAppAssignmentImpl>(createMobileAppAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
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
        if(this.value && this.value.length != 0){        const valueArrValue: MobileAppAssignmentImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof MobileAppAssignmentImpl? element as MobileAppAssignmentImpl:new MobileAppAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a MobileAppAssignmentInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: MobileAppAssignment[] | undefined) {
        if(value) {
            const valueArrValue: MobileAppAssignmentImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof MobileAppAssignmentImpl? element as MobileAppAssignmentImpl:new MobileAppAssignmentImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
