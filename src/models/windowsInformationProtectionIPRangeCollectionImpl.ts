import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRangeImpl} from './index';
import {IpRange} from './ipRange';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection IP Range Collection */
export class WindowsInformationProtectionIPRangeCollectionImpl implements WindowsInformationProtectionIPRangeCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Display name */
    private _displayName?: string | undefined;
    /** Collection of ip ranges */
    private _ranges?: IpRange[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new windowsInformationProtectionIPRangeCollection and sets the default values.
     * @param windowsInformationProtectionIPRangeCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionIPRangeCollectionParameterValue?: WindowsInformationProtectionIPRangeCollection | undefined) {
        this._additionalData = windowsInformationProtectionIPRangeCollectionParameterValue?.additionalData ? windowsInformationProtectionIPRangeCollectionParameterValue?.additionalData! : {};
        this._displayName = windowsInformationProtectionIPRangeCollectionParameterValue?.displayName;
        this._ranges = windowsInformationProtectionIPRangeCollectionParameterValue?.ranges;
    };
    /**
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "ranges": n => { this.ranges = n.getCollectionOfObjectValues<IpRangeImpl>(createIpRangeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the ranges property value. Collection of ip ranges
     * @returns a IpRangeInterface
     */
    public get ranges() {
        return this._ranges;
    };
    /**
     * Sets the ranges property value. Collection of ip ranges
     * @param value Value to set for the ranges property.
     */
    public set ranges(value: IpRange[] | undefined) {
        if(value) {
            const rangesArrValue: IpRangeImpl[] = [];
            this.ranges?.forEach(element => {
                rangesArrValue.push((element instanceof IpRangeImpl? element:new IpRangeImpl(element)));
            });
            this._ranges = rangesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.ranges && this.ranges.length != 0){        const rangesArrValue: IpRangeImpl[] = [];
        this.ranges?.forEach(element => {
            rangesArrValue.push((element instanceof IpRangeImpl? element:new IpRangeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IpRangeImpl>("ranges", rangesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
