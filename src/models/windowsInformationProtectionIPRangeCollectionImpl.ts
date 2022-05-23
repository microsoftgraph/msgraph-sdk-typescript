import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRangeImpl} from './index';
import {IpRange} from './ipRange';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection IP Range Collection */
export class WindowsInformationProtectionIPRangeCollectionImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionIPRangeCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name */
    public displayName?: string | undefined;
    /** Collection of ip ranges */
    public ranges?: IpRange[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionIPRangeCollection and sets the default values.
     * @param windowsInformationProtectionIPRangeCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionIPRangeCollectionParameterValue?: WindowsInformationProtectionIPRangeCollection | undefined) {
        this.additionalData = windowsInformationProtectionIPRangeCollectionParameterValue?.additionalData ? windowsInformationProtectionIPRangeCollectionParameterValue?.additionalData! : {}
        this.displayName = windowsInformationProtectionIPRangeCollectionParameterValue?.displayName ;
        this.ranges = windowsInformationProtectionIPRangeCollectionParameterValue?.ranges ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.ranges && this.ranges.length != 0){        const rangesArrValue: IpRangeImpl[] = []; this.ranges?.forEach(element => {rangesArrValue.push(new IpRangeImpl(element));});
        writer.writeCollectionOfObjectValues<IpRangeImpl>("ranges", rangesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
