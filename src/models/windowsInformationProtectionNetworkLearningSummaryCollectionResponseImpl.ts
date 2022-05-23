import {createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue';
import {WindowsInformationProtectionNetworkLearningSummaryImpl} from './index';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './windowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionNetworkLearningSummaryCollectionResponseImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionNetworkLearningSummaryCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: WindowsInformationProtectionNetworkLearningSummary[] | undefined;
    /**
     * Instantiates a new WindowsInformationProtectionNetworkLearningSummaryCollectionResponse and sets the default values.
     * @param windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue 
     */
    public constructor(windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue?: WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined) {
        this.additionalData = windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue?.additionalData ? windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = windowsInformationProtectionNetworkLearningSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummaryImpl>(createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: WindowsInformationProtectionNetworkLearningSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new WindowsInformationProtectionNetworkLearningSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
