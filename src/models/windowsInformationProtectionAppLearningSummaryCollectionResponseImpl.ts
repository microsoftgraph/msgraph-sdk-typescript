import {createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue} from './createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import {WindowsInformationProtectionAppLearningSummaryImpl} from './index';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from './windowsInformationProtectionAppLearningSummaryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionAppLearningSummaryCollectionResponseImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionAppLearningSummaryCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: WindowsInformationProtectionAppLearningSummary[] | undefined;
    /**
     * Instantiates a new WindowsInformationProtectionAppLearningSummaryCollectionResponse and sets the default values.
     * @param windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue 
     */
    public constructor(windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue?: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined) {
        this.additionalData = windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue?.additionalData ? windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = windowsInformationProtectionAppLearningSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummaryImpl>(createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: WindowsInformationProtectionAppLearningSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new WindowsInformationProtectionAppLearningSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
