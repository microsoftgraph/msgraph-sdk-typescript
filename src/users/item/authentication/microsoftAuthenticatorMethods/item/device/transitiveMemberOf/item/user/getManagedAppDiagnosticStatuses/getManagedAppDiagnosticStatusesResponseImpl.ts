import {ManagedAppDiagnosticStatusImpl} from '../../../../../../../../../../models/';
import {createManagedAppDiagnosticStatusFromDiscriminatorValue} from '../../../../../../../../../../models/createManagedAppDiagnosticStatusFromDiscriminatorValue';
import {ManagedAppDiagnosticStatus} from '../../../../../../../../../../models/managedAppDiagnosticStatus';
import {GetManagedAppDiagnosticStatusesResponse} from './getManagedAppDiagnosticStatusesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getManagedAppDiagnosticStatuses method. */
export class GetManagedAppDiagnosticStatusesResponseImpl implements AdditionalDataHolder, GetManagedAppDiagnosticStatusesResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ManagedAppDiagnosticStatus[] | undefined;
    /**
     * Instantiates a new getManagedAppDiagnosticStatusesResponse and sets the default values.
     * @param getManagedAppDiagnosticStatusesResponseParameterValue 
     */
    public constructor(getManagedAppDiagnosticStatusesResponseParameterValue?: GetManagedAppDiagnosticStatusesResponse | undefined) {
        this.additionalData = getManagedAppDiagnosticStatusesResponseParameterValue?.additionalData ? getManagedAppDiagnosticStatusesResponseParameterValue?.additionalData! : {}
        this.value = getManagedAppDiagnosticStatusesResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppDiagnosticStatusImpl>(createManagedAppDiagnosticStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppDiagnosticStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppDiagnosticStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppDiagnosticStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
