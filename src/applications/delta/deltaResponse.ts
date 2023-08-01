import type {Application} from '../../models/application';
import type {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Application[] | undefined;
}
