import {RecentNotebookImpl} from '../../../../models/';
import {createRecentNotebookFromDiscriminatorValue} from '../../../../models/createRecentNotebookFromDiscriminatorValue';
import {RecentNotebook} from '../../../../models/recentNotebook';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './getRecentNotebooksWithIncludePersonalNotebooksResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getRecentNotebooks method. */
export class GetRecentNotebooksWithIncludePersonalNotebooksResponseImpl implements GetRecentNotebooksWithIncludePersonalNotebooksResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: RecentNotebook[] | undefined;
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
     * Instantiates a new getRecentNotebooksWithIncludePersonalNotebooksResponse and sets the default values.
     * @param getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue 
     */
    public constructor(getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined) {
        this._additionalData = getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.additionalData ? getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.additionalData! : {};
        this._value = getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<RecentNotebookImpl>(createRecentNotebookFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: RecentNotebookImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof RecentNotebookImpl? element:new RecentNotebookImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecentNotebookImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a RecentNotebookInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: RecentNotebook[] | undefined) {
        if(value) {
            const valueArrValue: RecentNotebookImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof RecentNotebookImpl? element:new RecentNotebookImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
